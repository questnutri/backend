import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import BadRequest from '../../errors/BadRequest.error'
import Unauthorized from '../../errors/Unauthorized.error'
import { AdminTokenModel, NutritionistTokenModel, PatientTokenModel } from '../../../tokens/tokens.model'
import Forbidden from '../../errors/Forbidden.error'
import { TokenController } from '../../controllers/token.controller'

export async function authLogin(req: Request, res: Response, next: NextFunction) {
	try {
		const decoded = await decodeToken(req)
		await TokenController.verifyStoredToken(decoded, req.header('Authorization')!.replace('Bearer ', '').toString())
		if (decoded) {
			req.headers[`${(await decoded)?.role}Id`] = (await decoded)?.id.toString()
			next()
		}
	} catch (error) {
		next(error) //preventing route exposure
	}
}

export async function decodeToken(req: Request) {
	const token = req.header('Authorization')?.replace('Bearer ', '')
	if (!token) throw new Unauthorized(`Token not provided`)
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, role: string, iat: number, exp: number }
		return decoded
	} catch (error) {
		throw new BadRequest(`Invalid token`)
	}
}