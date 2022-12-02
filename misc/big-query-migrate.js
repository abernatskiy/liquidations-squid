const {BigQuery} = require('@google-cloud/bigquery')
const assert = require('assert')

assert(process.env.GOOGLE_DATASET_ID, 'GOOGLE_DATASET_ID must be set')
assert(process.env.GOOGLE_TABLE_ID, 'GOOGLE_TABLE_ID must be set')
const datasetId = process.env.GOOGLE_DATASET_ID
const tableId = process.env.GOOGLE_TABLE_ID

const bigQuery = new BigQuery()
const options = {
  query: `
		CREATE TABLE IF NOT EXISTS ${datasetId}.${tableId} (
			collateralAsset STRING,
			debtAsset STRING,
			user STRING,
			debtToCover NUMERIC,
			liquidatedCollateralAmount NUMERIC,
			liquidator STRING,
			receiveAToken BOOL,
			block NUMERIC,
			transactionHash STRING
		);
	`
}

console.log(`before: ${process.env.GOOGLE_TABLE_ID}`)
bigQuery
	.createQueryJob(options)
	.then(([job]) => {
		job.on('complete', metadata => {
			console.log(`Created (IF NOT EXISTS) a new table ${tableId} via job ${metadata.id}`)
			console.log(`after: ${process.env.GOOGLE_TABLE_ID}`)
		})
	})

