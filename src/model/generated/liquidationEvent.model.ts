import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class LiquidationEvent {
    constructor(props?: Partial<LiquidationEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    collateralAsset!: string

    @Index_()
    @Column_("text", {nullable: false})
    debtAsset!: string

    @Index_()
    @Column_("text", {nullable: false})
    user!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    debtToCover!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    liquidatedCollateralAmount!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    liquidator!: string

    @Column_("bool", {nullable: false})
    receiveAToken!: boolean

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    hash!: string
}
