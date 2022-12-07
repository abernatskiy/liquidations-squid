module.exports = class Data1670396395768 {
    name = 'Data1670396395768'

    async up(db) {
        await db.query(`CREATE TABLE "liquidation_event" ("id" character varying NOT NULL, "collateral_asset" text NOT NULL, "debt_asset" text NOT NULL, "user" text NOT NULL, "debt_to_cover" numeric NOT NULL, "liquidated_collateral_amount" numeric NOT NULL, "liquidator" text NOT NULL, "receive_a_token" boolean NOT NULL, "block" numeric NOT NULL, "timestamp" numeric NOT NULL, "hash" text NOT NULL, CONSTRAINT "PK_b81c20a3c0b565ceaf4491d66c9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_67cb08bbb575cce8da0468e938" ON "liquidation_event" ("collateral_asset") `)
        await db.query(`CREATE INDEX "IDX_1ef970673cbd4c995d239dcbdc" ON "liquidation_event" ("debt_asset") `)
        await db.query(`CREATE INDEX "IDX_fe8062b7f49db6ae70f26fe363" ON "liquidation_event" ("user") `)
        await db.query(`CREATE INDEX "IDX_6dc52210298c022f7a20cbe355" ON "liquidation_event" ("liquidator") `)
        await db.query(`CREATE INDEX "IDX_dd2ac914c208f03e17752f5ab6" ON "liquidation_event" ("block") `)
        await db.query(`CREATE INDEX "IDX_2570e6677073084fa46f024e3d" ON "liquidation_event" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_8b5eb637107bac8579903d40a7" ON "liquidation_event" ("hash") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "liquidation_event"`)
        await db.query(`DROP INDEX "public"."IDX_67cb08bbb575cce8da0468e938"`)
        await db.query(`DROP INDEX "public"."IDX_1ef970673cbd4c995d239dcbdc"`)
        await db.query(`DROP INDEX "public"."IDX_fe8062b7f49db6ae70f26fe363"`)
        await db.query(`DROP INDEX "public"."IDX_6dc52210298c022f7a20cbe355"`)
        await db.query(`DROP INDEX "public"."IDX_dd2ac914c208f03e17752f5ab6"`)
        await db.query(`DROP INDEX "public"."IDX_2570e6677073084fa46f024e3d"`)
        await db.query(`DROP INDEX "public"."IDX_8b5eb637107bac8579903d40a7"`)
    }
}
