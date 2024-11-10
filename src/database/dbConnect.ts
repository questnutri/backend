import mongoose from 'mongoose'
import 'colors'
import 'dotenv/config'

const uri = process.env.OFF_URI || `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_CONNECTION_URI}`

export default async (): Promise<boolean> => {
	try {
		if(process.env.OFF_URI) {
			console.log(`${'A local database was declared at '.blue}${'.env'.yellow.underline}${' file'.blue}`)
			console.log(`Application will attempt to connect locally instead`.blue)
		}
		console.log(`Connecting to database...`.yellow)
		await mongoose.connect(uri)
		console.log(`Connection stablished`.green)
		if(process.env.OFF_URI) console.log(`Application connected to ==> ${`${process.env.OFF_URI}`.underline}`)
		return true
	} catch (err) {
		console.log(`Unable to connect to database`.red.bold)
		console.log(err)
		return false
	}
}

export async function checkConnection(): Promise<boolean> {
	try {
		await mongoose.connect(uri)
		return true
	} catch (error) {
		return false
	}
}