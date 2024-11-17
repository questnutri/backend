import { NextFunction, Request, Response } from 'express'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nutritionistService from '../services/nutritionist.service'
import BadRequest from '../errors/BadRequest.error'
import NotFound from '../errors/NotFound.error'
import Unauthorized from '../errors/Unauthorized.error'
import patientService from '../services/patient.service'
import ShouldNeverHappen from '../errors/ShouldNeverHappen.error'
import { generatePasswordResetToken } from '../utils/password.reset.util'
import adminService from '../services/admin.service'
import { decodeToken } from '../middlewares/auth/auth.middleware'
import { TokenController } from './token.controller'

class AuthController {
	async register(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			if (await nutritionistService.findByEmail(req.body.email)) {
				throw new BadRequest('Email already in use')
			}
			const nutritionist = await nutritionistService.create(req.body)
			return res.status(200).json(nutritionist)
		} catch (error) {
			next(error)
		}
	}

	async login(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { email, password } = req.body
			const { role } = req.params
			let service;

			switch (role) {
				case 'nutritionist':
					service = nutritionistService;
					break;
				case 'patient':
					service = patientService;
					break;
				case 'admin':
					service = adminService;
					break;
				default:
					throw new NotFound('Invalid role')
			}

			const user = await service.findByEmail(email)
			if (!user) throw new NotFound('E-mail not found')
			if (!bcrypt.compareSync(password, user.password)) throw new Unauthorized('Invalid password')

			const payload = { id: user._id as string, role }
			const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' })
			await TokenController.storeToken(payload, token)

			return res.status(200).json({ token })
		} catch (error) {
			next(error)
		}
	}
	
	async logout(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			await TokenController.logoutStoredToken(req)
			return res.status(204).send()
		} catch (error) {
			next(error)
		}

	}

	async sendResetPasswordToken(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { email } = req.body
			const patient = await patientService.findByEmail(email)
			if (!patient) throw new NotFound(`There's no user with this email`)
			//send email later
			return res.status(200).json({ token: generatePasswordResetToken('Patient', patient._id as string) })

		} catch (error) {
			next(error)
		}
	}

	async resetPasswordPatient(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { token } = req.params
			try {
				const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { resetPatientId: string }
				console.log(decoded)
				const patient = await patientService.findById(decoded?.resetPatientId)
				if (!patient) throw new ShouldNeverHappen(`Reseting a patient's password`)
				const { password } = req.body
				patient.password = password
				await patient.save()
				return res.status(200).json({ message: 'Password updated successfully' })
			} catch (error) {
				throw new BadRequest('Invalid token')
			}
		} catch (error) {
			next(error)
		}
	}

	async checkToken(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const decoded = await decodeToken(req)
			await TokenController.verifyStoredToken(decoded, req.header('Authorization')!.replace('Bearer ', '').toString())
			return res.status(200).json(decoded)
		} catch (error) {
			next(error)
		}
	}
}

export default new AuthController()
