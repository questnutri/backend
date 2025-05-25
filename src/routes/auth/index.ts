import { Router } from 'express'
import authController from '../../controllers/auth.controller'
import { validateDto } from '../../middlewares/validate/validateDto.middleware'
import CreateNutritionistDto from '../../models/nutritionist/dto/create.nutritionist.dto'
import { LoginDto } from '../../models/login.dto'

const authRoutes = Router()

authRoutes.route('/')
	.get(authController.checkToken)

authRoutes.route('/register')
	.post(validateDto(CreateNutritionistDto), authController.register)

authRoutes.route('/login')
	.post(validateDto(LoginDto), authController.login)

authRoutes.route('/logout')
	.post(authController.logout)

authRoutes.route('/reset-password')
	.post(authController.resetPassword_step1)

authRoutes.route('/reset-password/validate/:token')
	.post(authController.resetPassword_step2)

authRoutes.route('/reset-password/execute/:token')
	.post(authController.resetPassword_step3)

// authRoutes.route('/:role/login')
// 	.post(validateDto(LoginDto), authController.login)

// authRoutes.route('/:role/logout')
// 	.post(authController.logout)

// authRoutes.route('/password/reset/patient/send')
// 	.post(validateDto(SendPasswordResetDto), authController.sendResetPasswordToken)

// authRoutes.route('/password/reset/patient/validate/:token')
// 	.post(validateDto(PasswordResetDto), authController.resetPasswordPatient)

export default authRoutes