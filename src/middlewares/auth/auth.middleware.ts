import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import BadRequest from '../../errors/BadRequest.error'
import Unauthorized from '../../errors/Unauthorized.error'
import { AdminTokenModel, NutritionistTokenModel, PatientTokenModel } from '../../../tokens/tokens.model'
import Forbidden from '../../errors/Forbidden.error'

export async function authLogin(req: Request, res: Response, next: NextFunction) {
	try {
		const decoded = await decodeToken(req)
		await verifyStoredToken(decoded, req.header('Authorization')!.replace('Bearer ', '').toString())
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

export async function storeToken(payload: { id: string, role: string }, token: string) {
	switch (payload.role) {
		case 'patient':
			await PatientTokenModel.destroy({ where: { id: payload.id.toString() } })
			await PatientTokenModel.create({ id: payload.id.toString(), token })
			break
		case 'nutritionist':
			await NutritionistTokenModel.destroy({ where: { id: payload.id.toString() } })
			await NutritionistTokenModel.create({ id: payload.id.toString(), token })
			break
		case 'admin':
			await AdminTokenModel.destroy({ where: { id: payload.id.toString() } })
			await AdminTokenModel.create({ id: payload.id.toString(), token })
			break
	}
}


export async function verifyStoredToken(decoded: { id: string, role: string }, token: string) {
	let storedTokenInstance;
	const {id, role} = decoded

    switch (role) {
        case 'admin':
            storedTokenInstance = await AdminTokenModel.findOne({ where: { id } })
            break
        case 'nutritionist':
            storedTokenInstance = await NutritionistTokenModel.findOne({ where: { id } })
            break
        case 'patient':
            storedTokenInstance = await PatientTokenModel.findOne({ where: { id } })
            break
        default:
            throw new Forbidden(`No token model found for role: ${role}`)
    }

	if (storedTokenInstance && storedTokenInstance.get('token', { plain: true }) !== token) {
        throw new Forbidden('Invalid token for ' + role)
    }
}