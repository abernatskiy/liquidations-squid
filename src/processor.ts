import {TypeormDatabase} from '@subsquid/typeorm-store'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as lendingPoolAbi from './abi/aave-lending-pool-v2'
import {LiquidationEvent} from './model'

// The so-called AAVE V2 (0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9) - starts at 11362579
// Tis' a proxy, implementation is at 0xc6845a5c768bf8d7681249f8927877efda425baf

// Grab events with a signature LiquidationCall(...)
// emitted by contract 0x7d2.. (aka AAVE V2 Lending Pool),
// keep id, topics and data for the event
// and a hash of the parent transaction

const processor = new EvmBatchProcessor()
	.setBlockRange({from: 11362579})
	.setDataSource({archive: 'https://eth.archive.subsquid.io'})
	.addLog('0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9', {
		filter: [[lendingPoolAbi.events.LiquidationCall.topic]],
		data: {
			evmLog: { id: true, topics: true, data: true },
			transaction: { hash: true }
		} as const
	})

processor.run(new TypeormDatabase(), async (ctx) => {
	const liquidations: LiquidationEvent[] = [];

	for (let c of ctx.blocks) {
		for (let i of c.items) {
			if (i.kind==='evmLog') {
				let {
					collateralAsset, debtAsset, user, debtToCover,
					liquidatedCollateralAmount, liquidator, receiveAToken
				} = lendingPoolAbi.events.LiquidationCall.decode(i.evmLog)
				let block = c.header.height
				let timestamp = c.header.timestamp
				let hash = i.transaction.hash
				let eventId = i.evmLog.id

				liquidations.push(new LiquidationEvent({
					id: eventId,
					collateralAsset: collateralAsset,
					debtAsset: debtAsset,
					user: user,
					debtToCover: debtToCover.toBigInt(),
					liquidatedCollateralAmount: liquidatedCollateralAmount.toBigInt(),
					liquidator: liquidator,
					receiveAToken: receiveAToken,
					block: BigInt(block),
					timestamp: BigInt(timestamp),
					hash: hash
				}))
			}
		}
	}

	await ctx.store.save(liquidations)
});
