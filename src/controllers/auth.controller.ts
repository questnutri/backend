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
import BaseError from '../errors/BaseError.error'
import userService from '../services/user.service'
import mongoose, { Mongoose } from 'mongoose'
import ServerError from '../errors/ServerError.error'
import { PasswordCycle } from '../enums/auth/passwordCycle.enum'
import tokenService from '../services/token.service'
import { TokenObjective } from '../enums/tokens/TokenObjectives.enum'

class AuthController {
	async register(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			if (await userService.findByEmail(req.body.email)) {
				throw new BadRequest('Email already in use')
			}
			const user = await userService.create({ ...req.body, role: 'nutritionist' });
			if (user) {
				const nutritionist = await nutritionistService.create({ ...req.body, _id: user._id })
				return res.status(201).json(nutritionist);
			}
			throw new BadRequest("Couldn't create new user", 503);
		} catch (error) {
			next(error)
		}
	}

	async login(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { email, password } = req.body

			const user = await userService.findByEmail(email);
			if (!user) throw new NotFound('E-mail not found');
			if (!user.password) throw new BaseError('Password not defined', 204);
			if (!bcrypt.compareSync(password, user.password)) throw new Unauthorized('Invalid password');

			return res.status(200).json({ token: await tokenService.createSession(user), role: user.role });
		} catch (error) {
			next(error);
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

	async checkToken(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const decoded = await decodeToken(req)
			await TokenController.verifyStoredToken(decoded, req.header('Authorization')!.replace('Bearer ', '').toString())
			return res.status(200).json(decoded)
		} catch (error) {
			next(error)
		}
	}

	async resetPassword_step1(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { email } = req.body;
			if (!email) throw new BadRequest("Email is required to reset password.");
			const user = await userService.findByEmail(email);
			if (!user) throw new NotFound("No user with this e-mail was found.");
			const token = jwt.sign(
				{
					id: user._id,
					token_objective: TokenObjective.PASSWORD_CONTROL,
					authorized: PasswordCycle.RESET_REQUEST
				},
				process.env.JWT_SECRET!,
				{
					expiresIn: '15m'
				}
			);
			return res.status(200).json({ token: token });
		} catch (error) {
			next(error)
		}
	}

	async resetPassword_step2(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { token } = req.params;
			const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, token_objective: TokenObjective, authorized: PasswordCycle };
			if (decoded.token_objective == TokenObjective.PASSWORD_CONTROL) {
				if (decoded.authorized == PasswordCycle.RESET_REQUEST) {
					const newToken = jwt.sign(
						{
							id: decoded.id,
							token_objective: TokenObjective.PASSWORD_CONTROL,
							authorized: PasswordCycle.RESET_AUTHORIZED
						},
						process.env.JWT_SECRET!,
						{
							expiresIn: '300s'
						}
					);
					return res.status(200).json({ token: newToken });
				}
			}
			throw new BadRequest("Invalid token for reset password");

		} catch (error) {
			next(error)
		}
	}

	async resetPassword_step3(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { token } = req.params;
			const decoded = jwt.verify(token, process.env.JWT_SECRET!,) as { id: mongoose.Types.ObjectId, token_objective: TokenObjective, authorized: PasswordCycle }
			if ((decoded.token_objective != TokenObjective.PASSWORD_CONTROL) || (decoded.authorized != PasswordCycle.RESET_AUTHORIZED)) {
				console.log(decoded);
				console.log(decoded.token_objective != TokenObjective.PASSWORD_CONTROL);
				console.log(decoded.authorized != PasswordCycle.RESET_AUTHORIZED);
				throw new BadRequest("Invalid reset password token");
			}

			const user = await userService.findById(decoded.id.toString());
			if (user) {
				const { newPassword } = req.body;
				const updated = await userService.update(decoded.id.toString(), { password: newPassword });
				if (updated) {
					return res.status(200).json({ message: `Password updated successfully!` });
				}
				throw new ServerError("Error while trying to update password");
			}

		} catch (error) {
			next(error)
		}
	}

	// async sendResetPasswordToken(req: Request, res: Response, next: NextFunction): Promise<void | any> {
	// 	try {
	// 		const { email } = req.body
	// 		const patient = await patientService.findByEmail(email)
	// 		if (!patient) throw new NotFound(`There's no user with this email`)
	// 		//send email later
	// 		return res.status(200).json({ token: generatePasswordResetToken('Patient', patient._id as string) })

	// 	} catch (error) {
	// 		next(error)
	// 	}
	// }

	// async resetPasswordPatient(req: Request, res: Response, next: NextFunction): Promise<void | any> {
	// 	try {
	// 		const { token } = req.params
	// 		try {
	// 			const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { resetPatientId: string }
	// 			const patient = await patientService.findById(decoded?.resetPatientId)
	// 			if (!patient) throw new ShouldNeverHappen(`Reseting a patient's password`)
	// 			const { password } = req.body
	// 			patient.password = password
	// 			await patient.save()
	// 			return res.status(200).json({ message: 'Password updated successfully' })
	// 		} catch (error) {
	// 			throw new BadRequest('Invalid token')
	// 		}
	// 	} catch (error) {
	// 		next(error)
	// 	}
	// }


}

export default new AuthController()
