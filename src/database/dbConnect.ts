import mongoose from 'mongoose'
import 'colors'
import 'dotenv/config'
import syncTokenDatabase from '../../tokens/sync.sqlite'
import ServiceUnavailable from '../errors/ServiceUnavailable.error'

const uri = process.env.OFF_URI || `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_CONNECTION_URI}`

export default async (): Promise<boolean> => {
	try {
		if(process.env.OFF_URI) {
			console.log(`${'A local database was declared at '.blue}${'.env'.yellow.underline}${' file'.blue}`)
			console.log(`Application will attempt to connect locally instead`.blue)
		}
		console.log(`Connecting to database...`.yellow)
		await mongoose.connect(uri, {
			connectTimeoutMS: 10000,
		}).catch((error) => {
			throw new ServiceUnavailable(error)
		})
		console.log(`Connection to database stablished`.green.bold)
		if(process.env.OFF_URI) console.log(`Application connected to ==> ${`${process.env.OFF_URI}`.underline}`.blue)
		syncTokenDatabase()
		return true
	} catch (err) {
		console.log(`Unable to connect to database`.red.bold)
		console.error(err)
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

export async function mongoConnect(): Promise<boolean>{
	try {
		await mongoose.connect("mongodb://localhost:27017");
		return true
	} catch (error) {
		return false
	}
}