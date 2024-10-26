import { Request, Response, Router } from 'express'
import { checkConnection } from '../../database/dbConnect'

const healthRoutes = Router()
healthRoutes.all('/', async (req: Request, res: Response) => {
	try {
		res.status(200).json({'server': true, database: await checkConnection()})
	} catch (error) {
		res.status(500).json({message: `Server error`})
	}
})

export default healthRoutes