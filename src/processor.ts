import {TypeormDatabase} from '@subsquid/typeorm-store'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as lendingPoolAbi from './abi/aave-lending-pool-v2'
import {BigQuery} from '@google-cloud/bigquery'
import assert from 'assert'
import {bigQuery} from './big-query'
import fs from 'fs'

assert(process.env.GOOGLE_DATASET_ID, 'GOOGLE_DATASET_ID must be set')
assert(process.env.GOOGLE_TABLE_ID, 'GOOGLE_TABLE_ID must be set')
const datasetId: string = process.env.GOOGLE_DATASET_ID
const tableId: string = process.env.GOOGLE_TABLE_ID

// The so-called AAVE V2 (0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9) - starts at 11362579
// Tis' a proxy, implementation is at 0xc6845a5c768bf8d7681249f8927877efda425baf

const processor = new EvmBatchProcessor()
	.setBlockRange({from: 11362579})
	.setDataSource({archive: 'https://eth-mainnet-v1-stage1.archive.subsquid.io'})
	.addLog('0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9', {
		filter: [[lendingPoolAbi.events['LiquidationCall(address,address,address,uint256,uint256,address,bool)'].topic]],
		data: { evmLog: { id: true, topics: true, data: true }, transaction: { hash: true } } as const
	})

processor.run(new TypeormDatabase(), async (ctx) => {
	const liquidations: unknown[] = [];

	for (let c of ctx.blocks) {
		for (let i of c.items) {
			if (i.kind==='evmLog') {
				const {
					collateralAsset, debtAsset, user, debtToCover,
					liquidatedCollateralAmount, liquidator, receiveAToken
				} = lendingPoolAbi.events['LiquidationCall(address,address,address,uint256,uint256,address,bool)'].decode(i.evmLog)
				const block = c.header.height
				const hash = i.transaction.hash

				liquidations.push({
					collateralAsset: collateralAsset,
					debtAsset: debtAsset,
					user: user,
					debtToCover: debtToCover.toBigInt().toString(),
					liquidatedCollateralAmount: liquidatedCollateralAmount.toBigInt().toString(),
					liquidator: liquidator,
					receiveAToken: receiveAToken,
					block: block,
					transactionHash: hash
				})
			}
		}
	}

	await bigQuery
		.dataset(datasetId)
		.table(tableId)
		.insert(liquidations)
});
