import {TypeormDatabase} from '@subsquid/typeorm-store'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as lendingPoolAbi from './abi/aave-lending-pool-v2'
import * as fs from 'fs'

const csvPath = 'aave-liquidations.csv'
if (!fs.existsSync(csvPath)) {
	fs.writeFileSync(csvPath, 'id,collateralAsset,debtAsset,user,debtToCover,liquidatedCollateralAmount,liquidator,receiveAToken,block,timestamp,transactionHash\n');
}

// The so-called AAVE V2 (0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9) - starts at 11362579
// Tis' a proxy, implementation is at 0xc6845a5c768bf8d7681249f8927877efda425baf
const processor = new EvmBatchProcessor()
	.setBlockRange({from: 11362579})
	.setDataSource({archive: 'https://eth-mainnet-v1-stage1.archive.subsquid.io'})
	.addLog('0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9', {
		filter: [[lendingPoolAbi.events.LiquidationCall.topic]],
		data: { evmLog: { id: true, topics: true, data: true }, transaction: { hash: true } } as const
	})

processor.run(new TypeormDatabase(), async (ctx) => {
	let csvWriter = fs.createWriteStream(csvPath, { flags: 'a' })

	for (let c of ctx.blocks) {
		for (let i of c.items) {
			if (i.kind==='evmLog') {
				let eventId = i.evmLog.id
				let { collateralAsset, debtAsset, user, debtToCover,
					liquidatedCollateralAmount, liquidator, receiveAToken
				} = lendingPoolAbi.events.LiquidationCall.decode(i.evmLog)
				let block = c.header.height
				let timestamp = c.header.timestamp
				let hash = i.transaction.hash

				csvWriter.write(`${eventId},${collateralAsset},${debtAsset},${user},${debtToCover.toBigInt().toString()},`+
					`${liquidatedCollateralAmount.toBigInt().toString()},${liquidator},${receiveAToken},${block},${timestamp},${hash}\n`)
			}
		}
	}

	csvWriter.close()
});
