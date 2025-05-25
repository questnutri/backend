import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import BadRequest from '../../errors/BadRequest.error'
import Unauthorized from '../../errors/Unauthorized.error'
import { TokenController } from '../../controllers/token.controller'
import { ContextRequest } from '../../controllers/findContext.controller'
import Forbidden from '../../errors/Forbidden.error'
import NotFound from '../../errors/NotFound.error'
import { SystemRoles } from '../../enums/SystemRoles.enum'

export async function authLogin(req: Request, res: Response, next: NextFunction) {
	try {
		const decoded = await decodeToken(req)
		await TokenController.verifyStoredToken(decoded, req.header('Authorization')!.replace('Bearer ', '').toString())
		if (decoded) {
			req.headers[`${decoded?.role}Id`] = decoded?.id.toString()
			req.headers.role = decoded.role
			next()
		}
	} catch (error) {
		next(error) //preventing route exposure
	}
}

export async function guardRole(req: ContextRequest, res: Response, next: NextFunction) {
	try {
		const baseUrl = req.baseUrl
		const segments = baseUrl.split('/')
		let neededRole = segments[segments.length - 1];
		neededRole = neededRole.slice(0, -1);

		if (neededRole !== req.headers.role) {
			throw new Forbidden("Logged user not allowed to access this route");
		}

		next()
	} catch (error) {
		next(error)
	}
}

export async function decodeToken(req: Request) {
	const token = req.header('Authorization')?.replace('Bearer ', '')
	if (!token) throw new Unauthorized(`Token not provided`)
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, role: SystemRoles, iat: number, exp: number }
		return decoded
	} catch (error) {
		throw new BadRequest(`Invalid token`)
	}
}