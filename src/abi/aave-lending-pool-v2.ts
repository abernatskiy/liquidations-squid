import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './aave-lending-pool-v2.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Borrow: new LogEvent<([reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, borrowRateMode: ethers.BigNumber, borrowRate: ethers.BigNumber, referral: number] & {reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, borrowRateMode: ethers.BigNumber, borrowRate: ethers.BigNumber, referral: number})>(
        abi, '0xc6a898309e823ee50bac64e45ca8adba6690e99e7841c45d754e2a38e9019d9b'
    ),
    Deposit: new LogEvent<([reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, referral: number] & {reserve: string, user: string, onBehalfOf: string, amount: ethers.BigNumber, referral: number})>(
        abi, '0xde6857219544bb5b7746f48ed30be6386fefc61b2f864cacf559893bf50fd951'
    ),
    FlashLoan: new LogEvent<([target: string, initiator: string, asset: string, amount: ethers.BigNumber, premium: ethers.BigNumber, referralCode: number] & {target: string, initiator: string, asset: string, amount: ethers.BigNumber, premium: ethers.BigNumber, referralCode: number})>(
        abi, '0x631042c832b07452973831137f2d73e395028b44b250dedc5abb0ee766e168ac'
    ),
    LiquidationCall: new LogEvent<([collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, liquidatedCollateralAmount: ethers.BigNumber, liquidator: string, receiveAToken: boolean] & {collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, liquidatedCollateralAmount: ethers.BigNumber, liquidator: string, receiveAToken: boolean})>(
        abi, '0xe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e005286'
    ),
    Paused: new LogEvent<[]>(
        abi, '0x9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e752'
    ),
    RebalanceStableBorrowRate: new LogEvent<([reserve: string, user: string] & {reserve: string, user: string})>(
        abi, '0x9f439ae0c81e41a04d3fdfe07aed54e6a179fb0db15be7702eb66fa8ef6f5300'
    ),
    Repay: new LogEvent<([reserve: string, user: string, repayer: string, amount: ethers.BigNumber] & {reserve: string, user: string, repayer: string, amount: ethers.BigNumber})>(
        abi, '0x4cdde6e09bb755c9a5589ebaec640bbfedff1362d4b255ebf8339782b9942faa'
    ),
    ReserveDataUpdated: new LogEvent<([reserve: string, liquidityRate: ethers.BigNumber, stableBorrowRate: ethers.BigNumber, variableBorrowRate: ethers.BigNumber, liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber] & {reserve: string, liquidityRate: ethers.BigNumber, stableBorrowRate: ethers.BigNumber, variableBorrowRate: ethers.BigNumber, liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber})>(
        abi, '0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a'
    ),
    ReserveUsedAsCollateralDisabled: new LogEvent<([reserve: string, user: string] & {reserve: string, user: string})>(
        abi, '0x44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd'
    ),
    ReserveUsedAsCollateralEnabled: new LogEvent<([reserve: string, user: string] & {reserve: string, user: string})>(
        abi, '0x00058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f2'
    ),
    Swap: new LogEvent<([reserve: string, user: string, rateMode: ethers.BigNumber] & {reserve: string, user: string, rateMode: ethers.BigNumber})>(
        abi, '0xea368a40e9570069bb8e6511d668293ad2e1f03b0d982431fd223de9f3b70ca6'
    ),
    Unpaused: new LogEvent<[]>(
        abi, '0xa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d16933'
    ),
    Withdraw: new LogEvent<([reserve: string, user: string, to: string, amount: ethers.BigNumber] & {reserve: string, user: string, to: string, amount: ethers.BigNumber})>(
        abi, '0x3115d1449a7b732c986cba18244e897a450f61e1bb8d589cd2e69e6c8924f9f7'
    ),
}

export const functions = {
    FLASHLOAN_PREMIUM_TOTAL: new Func<[], {}, ethers.BigNumber>(
        abi, '0x074b2e43'
    ),
    LENDINGPOOL_REVISION: new Func<[], {}, ethers.BigNumber>(
        abi, '0x8afaff02'
    ),
    MAX_NUMBER_RESERVES: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf8119d51'
    ),
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT: new Func<[], {}, ethers.BigNumber>(
        abi, '0xe82fec2f'
    ),
    borrow: new Func<[asset: string, amount: ethers.BigNumber, interestRateMode: ethers.BigNumber, referralCode: number, onBehalfOf: string], {asset: string, amount: ethers.BigNumber, interestRateMode: ethers.BigNumber, referralCode: number, onBehalfOf: string}, []>(
        abi, '0xa415bcad'
    ),
    deposit: new Func<[asset: string, amount: ethers.BigNumber, onBehalfOf: string, referralCode: number], {asset: string, amount: ethers.BigNumber, onBehalfOf: string, referralCode: number}, []>(
        abi, '0xe8eda9df'
    ),
    finalizeTransfer: new Func<[asset: string, from: string, to: string, amount: ethers.BigNumber, balanceFromBefore: ethers.BigNumber, balanceToBefore: ethers.BigNumber], {asset: string, from: string, to: string, amount: ethers.BigNumber, balanceFromBefore: ethers.BigNumber, balanceToBefore: ethers.BigNumber}, []>(
        abi, '0xd5ed3933'
    ),
    flashLoan: new Func<[receiverAddress: string, assets: Array<string>, amounts: Array<ethers.BigNumber>, modes: Array<ethers.BigNumber>, onBehalfOf: string, params: string, referralCode: number], {receiverAddress: string, assets: Array<string>, amounts: Array<ethers.BigNumber>, modes: Array<ethers.BigNumber>, onBehalfOf: string, params: string, referralCode: number}, []>(
        abi, '0xab9c4b5d'
    ),
    getAddressesProvider: new Func<[], {}, string>(
        abi, '0xfe65acfe'
    ),
    getConfiguration: new Func<[asset: string], {asset: string}, ([data: ethers.BigNumber] & {data: ethers.BigNumber})>(
        abi, '0xc44b11f7'
    ),
    getReserveData: new Func<[asset: string], {asset: string}, ([configuration: ([data: ethers.BigNumber] & {data: ethers.BigNumber}), liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber, currentLiquidityRate: ethers.BigNumber, currentVariableBorrowRate: ethers.BigNumber, currentStableBorrowRate: ethers.BigNumber, lastUpdateTimestamp: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, id: number] & {configuration: ([data: ethers.BigNumber] & {data: ethers.BigNumber}), liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber, currentLiquidityRate: ethers.BigNumber, currentVariableBorrowRate: ethers.BigNumber, currentStableBorrowRate: ethers.BigNumber, lastUpdateTimestamp: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, id: number})>(
        abi, '0x35ea6a75'
    ),
    getReserveNormalizedIncome: new Func<[asset: string], {asset: string}, ethers.BigNumber>(
        abi, '0xd15e0053'
    ),
    getReserveNormalizedVariableDebt: new Func<[asset: string], {asset: string}, ethers.BigNumber>(
        abi, '0x386497fd'
    ),
    getReservesList: new Func<[], {}, Array<string>>(
        abi, '0xd1946dbc'
    ),
    getUserAccountData: new Func<[user: string], {user: string}, ([totalCollateralETH: ethers.BigNumber, totalDebtETH: ethers.BigNumber, availableBorrowsETH: ethers.BigNumber, currentLiquidationThreshold: ethers.BigNumber, ltv: ethers.BigNumber, healthFactor: ethers.BigNumber] & {totalCollateralETH: ethers.BigNumber, totalDebtETH: ethers.BigNumber, availableBorrowsETH: ethers.BigNumber, currentLiquidationThreshold: ethers.BigNumber, ltv: ethers.BigNumber, healthFactor: ethers.BigNumber})>(
        abi, '0xbf92857c'
    ),
    getUserConfiguration: new Func<[user: string], {user: string}, ([data: ethers.BigNumber] & {data: ethers.BigNumber})>(
        abi, '0x4417a583'
    ),
    initReserve: new Func<[asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string], {asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string}, []>(
        abi, '0x7a708e92'
    ),
    initialize: new Func<[provider: string], {provider: string}, []>(
        abi, '0xc4d66de8'
    ),
    liquidationCall: new Func<[collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, receiveAToken: boolean], {collateralAsset: string, debtAsset: string, user: string, debtToCover: ethers.BigNumber, receiveAToken: boolean}, []>(
        abi, '0x00a718a9'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    rebalanceStableBorrowRate: new Func<[asset: string, user: string], {asset: string, user: string}, []>(
        abi, '0xcd112382'
    ),
    repay: new Func<[asset: string, amount: ethers.BigNumber, rateMode: ethers.BigNumber, onBehalfOf: string], {asset: string, amount: ethers.BigNumber, rateMode: ethers.BigNumber, onBehalfOf: string}, ethers.BigNumber>(
        abi, '0x573ade81'
    ),
    setConfiguration: new Func<[asset: string, configuration: ethers.BigNumber], {asset: string, configuration: ethers.BigNumber}, []>(
        abi, '0xb8d29276'
    ),
    setPause: new Func<[val: boolean], {val: boolean}, []>(
        abi, '0xbedb86fb'
    ),
    setReserveInterestRateStrategyAddress: new Func<[asset: string, rateStrategyAddress: string], {asset: string, rateStrategyAddress: string}, []>(
        abi, '0x1d2118f9'
    ),
    setUserUseReserveAsCollateral: new Func<[asset: string, useAsCollateral: boolean], {asset: string, useAsCollateral: boolean}, []>(
        abi, '0x5a3b74b9'
    ),
    swapBorrowRateMode: new Func<[asset: string, rateMode: ethers.BigNumber], {asset: string, rateMode: ethers.BigNumber}, []>(
        abi, '0x94ba89a2'
    ),
    withdraw: new Func<[asset: string, amount: ethers.BigNumber, to: string], {asset: string, amount: ethers.BigNumber, to: string}, ethers.BigNumber>(
        abi, '0x69328dec'
    ),
}

export class Contract extends ContractBase {

    FLASHLOAN_PREMIUM_TOTAL(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.FLASHLOAN_PREMIUM_TOTAL, [])
    }

    LENDINGPOOL_REVISION(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.LENDINGPOOL_REVISION, [])
    }

    MAX_NUMBER_RESERVES(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.MAX_NUMBER_RESERVES, [])
    }

    MAX_STABLE_RATE_BORROW_SIZE_PERCENT(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.MAX_STABLE_RATE_BORROW_SIZE_PERCENT, [])
    }

    getAddressesProvider(): Promise<string> {
        return this.eth_call(functions.getAddressesProvider, [])
    }

    getConfiguration(asset: string): Promise<([data: ethers.BigNumber] & {data: ethers.BigNumber})> {
        return this.eth_call(functions.getConfiguration, [asset])
    }

    getReserveData(asset: string): Promise<([configuration: ([data: ethers.BigNumber] & {data: ethers.BigNumber}), liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber, currentLiquidityRate: ethers.BigNumber, currentVariableBorrowRate: ethers.BigNumber, currentStableBorrowRate: ethers.BigNumber, lastUpdateTimestamp: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, id: number] & {configuration: ([data: ethers.BigNumber] & {data: ethers.BigNumber}), liquidityIndex: ethers.BigNumber, variableBorrowIndex: ethers.BigNumber, currentLiquidityRate: ethers.BigNumber, currentVariableBorrowRate: ethers.BigNumber, currentStableBorrowRate: ethers.BigNumber, lastUpdateTimestamp: number, aTokenAddress: string, stableDebtTokenAddress: string, variableDebtTokenAddress: string, interestRateStrategyAddress: string, id: number})> {
        return this.eth_call(functions.getReserveData, [asset])
    }

    getReserveNormalizedIncome(asset: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getReserveNormalizedIncome, [asset])
    }

    getReserveNormalizedVariableDebt(asset: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getReserveNormalizedVariableDebt, [asset])
    }

    getReservesList(): Promise<Array<string>> {
        return this.eth_call(functions.getReservesList, [])
    }

    getUserAccountData(user: string): Promise<([totalCollateralETH: ethers.BigNumber, totalDebtETH: ethers.BigNumber, availableBorrowsETH: ethers.BigNumber, currentLiquidationThreshold: ethers.BigNumber, ltv: ethers.BigNumber, healthFactor: ethers.BigNumber] & {totalCollateralETH: ethers.BigNumber, totalDebtETH: ethers.BigNumber, availableBorrowsETH: ethers.BigNumber, currentLiquidationThreshold: ethers.BigNumber, ltv: ethers.BigNumber, healthFactor: ethers.BigNumber})> {
        return this.eth_call(functions.getUserAccountData, [user])
    }

    getUserConfiguration(user: string): Promise<([data: ethers.BigNumber] & {data: ethers.BigNumber})> {
        return this.eth_call(functions.getUserConfiguration, [user])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }
}
