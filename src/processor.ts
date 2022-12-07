import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {CsvDatabase, Table, types} from '@subsquid/csv-store'
import * as lendingPoolAbi from './abi/aave-lending-pool-v2'
import * as fs from 'fs'

// The so-called AAVE V2 (0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9) - starts at 11362579
// Tis' a proxy, implementation is at 0xc6845a5c768bf8d7681249f8927877efda425baf
const processor = new EvmBatchProcessor()
	.setBlockRange({from: 11362579})
	.setDataSource({archive: 'https://eth-mainnet-v1-stage1.archive.subsquid.io'})
	.addLog('0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9', {
		filter: [[lendingPoolAbi.events.LiquidationCall.topic]],
		data: { evmLog: { id: true, topics: true, data: true }, transaction: { hash: true } } as const
	})

// Translation of schema.graphql to the csv-store speak
const LiquidationEventsTable = new Table('liquidationEvents', {
	id: types.string,
	collateralAsset: types.string,
	debtAsset: types.string,
	user: types.string,
	debtToCover: types.bigint,
	liquidatedCollateralAmount: types.bigint,
	liquidator: types.string,
	receiveAToken: types.boolean,
	block: types.bigint,
	timestamp: types.bigint,
	hash: types.string
})

const db = new CsvDatabase([LiquidationEventsTable], {dest: `./csv/`, chunkSize: 10})

processor.run(db, async (ctx) => {
	let liquidationEventsBuffer: any[] = []

	for (let c of ctx.blocks) {
		for (let i of c.items) {
			if (i.kind==='evmLog') {
				let id = i.evmLog.id
				let { collateralAsset, debtAsset, user, debtToCover,
					liquidatedCollateralAmount, liquidator, receiveAToken
				} = lendingPoolAbi.events.LiquidationCall.decode(i.evmLog)
				let block = c.header.height
				let timestamp = c.header.timestamp
				let hash = i.transaction.hash

				liquidationEventsBuffer.push({
					id, collateralAsset, debtAsset, user, debtToCover,
					liquidatedCollateralAmount, liquidator, receiveAToken,
					block, timestamp, hash
				})
			}
		}
	}

	for (let le of liquidationEventsBuffer) {
		ctx.store.write(LiquidationEventsTable, le)
	}
});
