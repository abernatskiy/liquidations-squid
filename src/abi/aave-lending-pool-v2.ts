// Typescript ABI generated
// for AAVE Lending Pool V2 at 0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9
// from its implementation contract at 0xC6845a5C768BF8D7681249f8927877Efda425baf
// automatically by squid-evm-typegen 1.3.1

import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type Borrow0Event = ([reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, borrowRateMode: ethers.BigNumber, borrowRate: ethers.BigNumber, referral: number] & {reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, borrowRateMode: ethers.BigNumber, borrowRate: ethers.BigNumber, referral: number})

export type Deposit0Event = ([reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, referral: number] & {reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, referral: number})

export type FlashLoan0Event = ([target: string, initiator: string, asset: string, amount: ethers.BigNumber, premium: ethers.BigNumber, referralCode: number] & {target: string, initiator: string, asset: string, amount: ethers.BigNumber, premium: ethers.BigNumber, referralCode: number})

export type LiquidationCall0Event = ([collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, liquidatedCollateralAmount: ethers.BigNumber, liquidator: string, receiveAToken: boolean] & {collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, liquidatedCollateralAmount: ethers.BigNumber, liquidator: string, receiveAToken: boolean})

export type RebalanceStableBorrowRate0Event = ([reserve: string, user: string] & {reserve: string, user: string})

export type Repay0Event = ([reserve: string, user: string, repayer: string, amount: ethers.BigNumber] & {reserve: string, user: string, repayer: string, amount: ethers.BigNumber})

export type ReserveDataUpdated0Event = ([reserve: string, liquidityRate: ethers.BigNumber, stableBorrowRate: ethers.BigNumber, variableBorrowRate: ethers.BigNumber, liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber] & {reserve: string, liquidityRate: ethers.BigNumber, stableBorrowRate: ethers.BigNumber, variableBorrowRate: ethers.BigNumber, liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber})

export type ReserveUsedAsCollateralDisabled0Event = ([reserve: string, user: string] & {reserve: string, user: string})

export type ReserveUsedAsCollateralEnabled0Event = ([reserve: string, user: string] & {reserve: string, user: string})

export type Swap0Event = ([reserve: string, user: string, rateMode: ethers.BigNumber] & {reserve: string, user: string, rateMode: ethers.BigNumber})

export type Withdraw0Event = ([reserve: string, user: string, to: string, amount: ethers.BigNumber] & {reserve: string, user: string, to: string, amount: ethers.BigNumber})

export interface EvmLog {
  data: string;
  topics: string[];
}

function decodeEvent(signature: string, data: EvmLog): any {
  return abi.decodeEventLog(
    abi.getEvent(signature),
    data.data || "",
    data.topics
  );
}

export const events = {
  "Borrow(address,address,address,uint256,uint256,uint256,uint16)": {
    topic: abi.getEventTopic("Borrow(address,address,address,uint256,uint256,uint256,uint16)"),
    decode(data: EvmLog): Borrow0Event {
      return decodeEvent("Borrow(address,address,address,uint256,uint256,uint256,uint16)", data)
    }
  }
  ,
  "Deposit(address,address,address,uint256,uint16)": {
    topic: abi.getEventTopic("Deposit(address,address,address,uint256,uint16)"),
    decode(data: EvmLog): Deposit0Event {
      return decodeEvent("Deposit(address,address,address,uint256,uint16)", data)
    }
  }
  ,
  "FlashLoan(address,address,address,uint256,uint256,uint16)": {
    topic: abi.getEventTopic("FlashLoan(address,address,address,uint256,uint256,uint16)"),
    decode(data: EvmLog): FlashLoan0Event {
      return decodeEvent("FlashLoan(address,address,address,uint256,uint256,uint16)", data)
    }
  }
  ,
  "LiquidationCall(address,address,address,uint256,uint256,address,bool)": {
    topic: abi.getEventTopic("LiquidationCall(address,address,address,uint256,uint256,address,bool)"),
    decode(data: EvmLog): LiquidationCall0Event {
      return decodeEvent("LiquidationCall(address,address,address,uint256,uint256,address,bool)", data)
    }
  }
  ,
  "Paused()": {
    topic: abi.getEventTopic("Paused()"),
  }
  ,
  "RebalanceStableBorrowRate(address,address)": {
    topic: abi.getEventTopic("RebalanceStableBorrowRate(address,address)"),
    decode(data: EvmLog): RebalanceStableBorrowRate0Event {
      return decodeEvent("RebalanceStableBorrowRate(address,address)", data)
    }
  }
  ,
  "Repay(address,address,address,uint256)": {
    topic: abi.getEventTopic("Repay(address,address,address,uint256)"),
    decode(data: EvmLog): Repay0Event {
      return decodeEvent("Repay(address,address,address,uint256)", data)
    }
  }
  ,
  "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): ReserveDataUpdated0Event {
      return decodeEvent("ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "ReserveUsedAsCollateralDisabled(address,address)": {
    topic: abi.getEventTopic("ReserveUsedAsCollateralDisabled(address,address)"),
    decode(data: EvmLog): ReserveUsedAsCollateralDisabled0Event {
      return decodeEvent("ReserveUsedAsCollateralDisabled(address,address)", data)
    }
  }
  ,
  "ReserveUsedAsCollateralEnabled(address,address)": {
    topic: abi.getEventTopic("ReserveUsedAsCollateralEnabled(address,address)"),
    decode(data: EvmLog): ReserveUsedAsCollateralEnabled0Event {
      return decodeEvent("ReserveUsedAsCollateralEnabled(address,address)", data)
    }
  }
  ,
  "Swap(address,address,uint256)": {
    topic: abi.getEventTopic("Swap(address,address,uint256)"),
    decode(data: EvmLog): Swap0Event {
      return decodeEvent("Swap(address,address,uint256)", data)
    }
  }
  ,
  "Unpaused()": {
    topic: abi.getEventTopic("Unpaused()"),
  }
  ,
  "Withdraw(address,address,address,uint256)": {
    topic: abi.getEventTopic("Withdraw(address,address,address,uint256)"),
    decode(data: EvmLog): Withdraw0Event {
      return decodeEvent("Withdraw(address,address,address,uint256)", data)
    }
  }
  ,
}

export type Borrow0Function = ([asset: string, amount: ethers.BigNumber, interestRateMode: ethers.BigNumber, referralCode: number, onBehalfOf: string] & {asset: string, amount: ethers.BigNumber, interestRateMode: ethers.BigNumber, referralCode: number, onBehalfOf: string})

export type Deposit0Function = ([asset: string, amount: ethers.BigNumber, onBehalfOf: string, referralCode: number] & {asset: string, amount: ethers.BigNumber, onBehalfOf: string, referralCode: number})

export type FinalizeTransfer0Function = ([asset: string, from: string, to: string, amount: ethers.BigNumber, balanceFromBefore: ethers.BigNumber, balanceToBefore: ethers.BigNumber] & {asset: string, from: string, to: string, amount: ethers.BigNumber, balanceFromBefore: ethers.BigNumber, balanceToBefore: ethers.BigNumber})

export type FlashLoan0Function = ([receiverAddress: string, assets: Array<string>, amounts: Array<ethers.BigNumber>, modes: Array<ethers.BigNumber>, onBehalfOf: string, params: string, referralCode: number] & {receiverAddress: string, assets: Array<string>, amounts: Array<ethers.BigNumber>, modes: Array<ethers.BigNumber>, onBehalfOf: string, params: string, referralCode: number})

export type InitReserve0Function = ([asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string] & {asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string})

export type Initialize0Function = ([provider: string] & {provider: string})

export type LiquidationCall0Function = ([collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, receiveAToken: boolean] & {collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, receiveAToken: boolean})

export type RebalanceStableBorrowRate0Function = ([asset: string, user: string] & {asset: string, user: string})

export type Repay0Function = ([asset: string, amount: ethers.BigNumber, rateMode: ethers.BigNumber, onBehalfOf: string] & {asset: string, amount: ethers.BigNumber, rateMode: ethers.BigNumber, onBehalfOf: string})

export type SetConfiguration0Function = ([asset: string, configuration: ethers.BigNumber] & {asset: string, configuration: ethers.BigNumber})

export type SetPause0Function = ([val: boolean] & {val: boolean})

export type SetReserveInterestRateStrategyAddress0Function = ([asset: string, rateStrategyAddress: string] & {asset: string, rateStrategyAddress: string})

export type SetUserUseReserveAsCollateral0Function = ([asset: string, useAsCollateral: boolean] & {asset: string, useAsCollateral: boolean})

export type SwapBorrowRateMode0Function = ([asset: string, rateMode: ethers.BigNumber] & {asset: string, rateMode: ethers.BigNumber})

export type Withdraw0Function = ([asset: string, amount: ethers.BigNumber, to: string] & {asset: string, amount: ethers.BigNumber, to: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "borrow(address,uint256,uint256,uint16,address)": {
    sighash: abi.getSighash("borrow(address,uint256,uint256,uint16,address)"),
    decode(input: string): Borrow0Function {
      return decodeFunction(input)
    }
  }
  ,
  "deposit(address,uint256,address,uint16)": {
    sighash: abi.getSighash("deposit(address,uint256,address,uint16)"),
    decode(input: string): Deposit0Function {
      return decodeFunction(input)
    }
  }
  ,
  "finalizeTransfer(address,address,address,uint256,uint256,uint256)": {
    sighash: abi.getSighash("finalizeTransfer(address,address,address,uint256,uint256,uint256)"),
    decode(input: string): FinalizeTransfer0Function {
      return decodeFunction(input)
    }
  }
  ,
  "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)": {
    sighash: abi.getSighash("flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)"),
    decode(input: string): FlashLoan0Function {
      return decodeFunction(input)
    }
  }
  ,
  "initReserve(address,address,address,address,address)": {
    sighash: abi.getSighash("initReserve(address,address,address,address,address)"),
    decode(input: string): InitReserve0Function {
      return decodeFunction(input)
    }
  }
  ,
  "initialize(address)": {
    sighash: abi.getSighash("initialize(address)"),
    decode(input: string): Initialize0Function {
      return decodeFunction(input)
    }
  }
  ,
  "liquidationCall(address,address,address,uint256,bool)": {
    sighash: abi.getSighash("liquidationCall(address,address,address,uint256,bool)"),
    decode(input: string): LiquidationCall0Function {
      return decodeFunction(input)
    }
  }
  ,
  "rebalanceStableBorrowRate(address,address)": {
    sighash: abi.getSighash("rebalanceStableBorrowRate(address,address)"),
    decode(input: string): RebalanceStableBorrowRate0Function {
      return decodeFunction(input)
    }
  }
  ,
  "repay(address,uint256,uint256,address)": {
    sighash: abi.getSighash("repay(address,uint256,uint256,address)"),
    decode(input: string): Repay0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setConfiguration(address,uint256)": {
    sighash: abi.getSighash("setConfiguration(address,uint256)"),
    decode(input: string): SetConfiguration0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setPause(bool)": {
    sighash: abi.getSighash("setPause(bool)"),
    decode(input: string): SetPause0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setReserveInterestRateStrategyAddress(address,address)": {
    sighash: abi.getSighash("setReserveInterestRateStrategyAddress(address,address)"),
    decode(input: string): SetReserveInterestRateStrategyAddress0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setUserUseReserveAsCollateral(address,bool)": {
    sighash: abi.getSighash("setUserUseReserveAsCollateral(address,bool)"),
    decode(input: string): SetUserUseReserveAsCollateral0Function {
      return decodeFunction(input)
    }
  }
  ,
  "swapBorrowRateMode(address,uint256)": {
    sighash: abi.getSighash("swapBorrowRateMode(address,uint256)"),
    decode(input: string): SwapBorrowRateMode0Function {
      return decodeFunction(input)
    }
  }
  ,
  "withdraw(address,uint256,address)": {
    sighash: abi.getSighash("withdraw(address,uint256,address)"),
    decode(input: string): Withdraw0Function {
      return decodeFunction(input)
    }
  }
  ,
}

interface ChainContext  {
  _chain: Chain
}

interface BlockContext  {
  _chain: Chain
  block: Block
}

interface Block  {
  height: number
}

interface Chain  {
  client:  {
    call: <T=any>(method: string, params?: unknown[]) => Promise<T>
  }
}

export class Contract  {
  private readonly _chain: Chain
  private readonly blockHeight: number
  readonly address: string

  constructor(ctx: BlockContext, address: string)
  constructor(ctx: ChainContext, block: Block, address: string)
  constructor(ctx: BlockContext, blockOrAddress: Block | string, address?: string) {
    this._chain = ctx._chain
    if (typeof blockOrAddress === 'string')  {
      this.blockHeight = ctx.block.height
      this.address = ethers.utils.getAddress(blockOrAddress)
    }
    else  {
      assert(address != null)
      this.blockHeight = blockOrAddress.height
      this.address = ethers.utils.getAddress(address)
    }
  }

  async FLASHLOAN_PREMIUM_TOTAL(): Promise<ethers.BigNumber> {
    return this.call("FLASHLOAN_PREMIUM_TOTAL", [])
  }

  async LENDINGPOOL_REVISION(): Promise<ethers.BigNumber> {
    return this.call("LENDINGPOOL_REVISION", [])
  }

  async MAX_NUMBER_RESERVES(): Promise<ethers.BigNumber> {
    return this.call("MAX_NUMBER_RESERVES", [])
  }

  async MAX_STABLE_RATE_BORROW_SIZE_PERCENT(): Promise<ethers.BigNumber> {
    return this.call("MAX_STABLE_RATE_BORROW_SIZE_PERCENT", [])
  }

  async getAddressesProvider(): Promise<string> {
    return this.call("getAddressesProvider", [])
  }

  async getConfiguration(asset: string): Promise<([data: ethers.BigNumber] & {data: ethers.BigNumber})> {
    return this.call("getConfiguration", [asset])
  }

  async getReserveData(asset: string): Promise<([configuration: ([data: ethers.BigNumber] & {data: ethers.BigNumber}), liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber, currentLiquidityRate: ethers.BigNumber, currentVariableBorrowRate: ethers.BigNumber, currentStableBorrowRate: ethers.BigNumber, lastUpdateTimestamp: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, id: number] & {configuration: ([data: ethers.BigNumber] & {data: ethers.BigNumber}), liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber, currentLiquidityRate: ethers.BigNumber, currentVariableBorrowRate: ethers.BigNumber, currentStableBorrowRate: ethers.BigNumber, lastUpdateTimestamp: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, id: number})> {
    return this.call("getReserveData", [asset])
  }

  async getReserveNormalizedIncome(asset: string): Promise<ethers.BigNumber> {
    return this.call("getReserveNormalizedIncome", [asset])
  }

  async getReserveNormalizedVariableDebt(asset: string): Promise<ethers.BigNumber> {
    return this.call("getReserveNormalizedVariableDebt", [asset])
  }

  async getReservesList(): Promise<Array<string>> {
    return this.call("getReservesList", [])
  }

  async getUserAccountData(user: string): Promise<([totalCollateralETH: ethers.BigNumber, totalDebtETH: ethers.BigNumber, availableBorrowsETH: ethers.BigNumber, currentLiquidationThreshold: ethers.BigNumber, ltv: ethers.BigNumber, healthFactor: ethers.BigNumber] & {totalCollateralETH: ethers.BigNumber, totalDebtETH: ethers.BigNumber, availableBorrowsETH: ethers.BigNumber, currentLiquidationThreshold: ethers.BigNumber, ltv: ethers.BigNumber, healthFactor: ethers.BigNumber})> {
    return this.call("getUserAccountData", [user])
  }

  async getUserConfiguration(user: string): Promise<([data: ethers.BigNumber] & {data: ethers.BigNumber})> {
    return this.call("getUserConfiguration", [user])
  }

  async paused(): Promise<boolean> {
    return this.call("paused", [])
  }

  private async call(name: string, args: any[]) : Promise<any> {
    const fragment = abi.getFunction(name)
    const data = abi.encodeFunctionData(fragment, args)
    const result = await this._chain.client.call('eth_call', [{to: this.address, data}, this.blockHeight])
    const decoded = abi.decodeFunctionResult(fragment, result)
    return decoded.length > 1 ? decoded : decoded[0]
  }
}

function getJsonAbi(): any {
  return [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "borrowRateMode",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "borrowRate",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "referral",
          "type": "uint16"
        }
      ],
      "name": "Borrow",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "referral",
          "type": "uint16"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "premium",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "referralCode",
          "type": "uint16"
        }
      ],
      "name": "FlashLoan",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "debtAsset",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "debtToCover",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidatedCollateralAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "receiveAToken",
          "type": "bool"
        }
      ],
      "name": "LiquidationCall",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "RebalanceStableBorrowRate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "repayer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Repay",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidityRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "stableBorrowRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "variableBorrowRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidityIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "variableBorrowIndex",
          "type": "uint256"
        }
      ],
      "name": "ReserveDataUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "ReserveUsedAsCollateralDisabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "ReserveUsedAsCollateralEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rateMode",
          "type": "uint256"
        }
      ],
      "name": "Swap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "FLASHLOAN_PREMIUM_TOTAL",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "LENDINGPOOL_REVISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_NUMBER_RESERVES",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_STABLE_RATE_BORROW_SIZE_PERCENT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "interestRateMode",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "referralCode",
          "type": "uint16"
        },
        {
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        }
      ],
      "name": "borrow",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "referralCode",
          "type": "uint16"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "balanceFromBefore",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "balanceToBefore",
          "type": "uint256"
        }
      ],
      "name": "finalizeTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiverAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "assets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "modes",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        },
        {
          "internalType": "uint16",
          "name": "referralCode",
          "type": "uint16"
        }
      ],
      "name": "flashLoan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAddressesProvider",
      "outputs": [
        {
          "internalType": "contract ILendingPoolAddressesProvider",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getConfiguration",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "data",
              "type": "uint256"
            }
          ],
          "internalType": "struct DataTypes.ReserveConfigurationMap",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveData",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "data",
                  "type": "uint256"
                }
              ],
              "internalType": "struct DataTypes.ReserveConfigurationMap",
              "name": "configuration",
              "type": "tuple"
            },
            {
              "internalType": "uint128",
              "name": "liquidityIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "variableBorrowIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentLiquidityRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentVariableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "currentStableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint40",
              "name": "lastUpdateTimestamp",
              "type": "uint40"
            },
            {
              "internalType": "address",
              "name": "aTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "stableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "variableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "interestRateStrategyAddress",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "id",
              "type": "uint8"
            }
          ],
          "internalType": "struct DataTypes.ReserveData",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveNormalizedIncome",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveNormalizedVariableDebt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReservesList",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserAccountData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalCollateralETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalDebtETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "availableBorrowsETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentLiquidationThreshold",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ltv",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "healthFactor",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserConfiguration",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "data",
              "type": "uint256"
            }
          ],
          "internalType": "struct DataTypes.UserConfigurationMap",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "aTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "stableDebtAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "variableDebtAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "interestRateStrategyAddress",
          "type": "address"
        }
      ],
      "name": "initReserve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ILendingPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collateralAsset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "debtAsset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "debtToCover",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "receiveAToken",
          "type": "bool"
        }
      ],
      "name": "liquidationCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "rebalanceStableBorrowRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rateMode",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "onBehalfOf",
          "type": "address"
        }
      ],
      "name": "repay",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "configuration",
          "type": "uint256"
        }
      ],
      "name": "setConfiguration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "val",
          "type": "bool"
        }
      ],
      "name": "setPause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "rateStrategyAddress",
          "type": "address"
        }
      ],
      "name": "setReserveInterestRateStrategyAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "useAsCollateral",
          "type": "bool"
        }
      ],
      "name": "setUserUseReserveAsCollateral",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "rateMode",
          "type": "uint256"
        }
      ],
      "name": "swapBorrowRateMode",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}
