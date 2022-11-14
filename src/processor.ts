import {TypeormDatabase} from "@subsquid/typeorm-store";
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as lendingPoolAbi from './abi/aave-lending-pool-v2'

// The so-called AAVE V2 (https://etherscan.io/address/0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9) - starts at 11362579
// Tis' a proxy, Implementation is at 0xc6845a5c768bf8d7681249f8927877efda425baf

const processor = new EvmBatchProcessor()
	.setBlockRange({from: 11362579})
	.setDataSource({
		chain: process.env.ETHEREUM_MAINNET_WSS,
		archive: 'https://eth.archive.subsquid.io',
	})
	.addLog('0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9', {
		filter: [[lendingPoolAbi.events['LiquidationCall(address,address,address,uint256,uint256,address,bool)'].topic]],
		data: {
			evmLog: {
				topics: true,
				data: true
			}
		} as const
	})


processor.run(new TypeormDatabase(), async (ctx) => {
  for (let c of ctx.blocks) {
    for (let i of c.items) {
      // apply arbitrary data transformation logic here
      // use ctx.store to persist the data
			console.log(i)
      ctx.log.info(i, "Next item:")
    }
  }
});

