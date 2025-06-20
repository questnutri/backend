import { NextFunction, Request, Response } from 'express'
import patientService, { PatientQuery } from '../../services/patient.service'
import NotFound from '../../errors/NotFound.error'
import ShouldNeverHappen from '../../errors/ShouldNeverHappen.error'
import { ContextRequest } from '../findContext.controller'
import ServerError from '../../errors/ServerError.error'
import BadRequest from '../../errors/BadRequest.error'
import userService from '../../services/user.service'
import { SystemRoles } from '../../enums/SystemRoles.enum'

class PatientController {
	async getPatient(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
		try {
			if (!req.patient) throw new ShouldNeverHappen('Finding a patient')

			if (req.patient.dailyMealRecord?.checkingDay !== new Date().getDay()) {
				req.patient.dailyMealRecord!.completedToday = []
				req.patient.dailyMealRecord!.checkingDay = new Date().getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6
				await req.patient.save()
			}

			return res.status(200).json(req.patient)
		} catch (error) {
			next(error)
		}
	}

	async getById(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { patientId } = req.params
			const patient = await patientService.findById(patientId)
			if (!patient) throw new NotFound('Patient not found')
			return res.status(200).json(patient)
		} catch (error) {
			next(error)
		}
	}

	async getAll(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { nutritionistId } = req.headers
			if (!nutritionistId) throw new ShouldNeverHappen('Getting all patients from one nutritionist')

			const query: PatientQuery = {
				firstName: req.query.firstName as string,
				email: req.query.email as string,
				rg: req.query.rg as string,
				cpf: req.query.cpf as string,
				phone: req.query.phone as string,
			}

			const patients = await patientService.findAllFromNutritionist(nutritionistId as string, query)
			return res.status(200).json(patients)
		} catch (error) {
			next(error)
		}
	}

	async getAllAsAdmin(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const patients = await patientService.findAll()
			return res.status(200).json(patients)
		} catch (error) {
			next(error)
		}
	}

	async create(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
		try {
			if (!req.nutritionist) throw new ShouldNeverHappen('Creating a new patient to a nutritionist');
			const user = await userService.create({
				role: SystemRoles.PATIENT,
				email: req.body.email,
				password: req.body.details.cpf.replace(/[\.\-\s]/g, '') || 123456789
			});
			if (!user) throw new ServerError(null, "Error while trying to create a new user for patient.", 500);
			const newPatient = await patientService.create({ ...req.body, nutri: req.nutritionist._id, password: req.body.details.cpf, _id: user._id })
			if (!newPatient) throw new ServerError('Impossible to create a new patient')
			req.nutritionist.patients.push(newPatient._id)
			await req.nutritionist.save()
			req.headers.patientId = newPatient._id.toString()
			next()
			// return res.status(201).json({ patient: newPatient, activationToken: generatePasswordResetToken('Patient', newPatient!._id as string) })
		} catch (error) {
			next(error)
		}
	}

	async getByEmail(req: Request, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const patient = await patientService.findByEmail(req.body.email)
			if (!patient) throw new NotFound('Patient not found')
			return res.status(201).json(patient)
		} catch (error) {
			next(error)
		}
	}

	async updateById(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
		try {
			if (!req.patient) throw new ShouldNeverHappen('Updating a patient')
			let updateData = req.body
			if (updateData.details) {
				updateData = {
					...updateData,
					// details: {
					// 	...req.patient.details,
					// 	...req.body.details,
					// }
				}
			}
			const updated = await patientService.update(req.patient._id.toString(), updateData)
			if (!updated) throw new NotFound('Patient not found')
			return res.status(200).json(updated)
		} catch (error) {
			next(error)
		}
	}

	async deleteById(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
		try {
			if (!req.patient) throw new ShouldNeverHappen('Deleting a patient')
			const patientId = req.patient._id
			const deleted = await patientService.delete(req.patient._id.toString())
			if (deleted) {
				const index = req.nutritionist?.patients.indexOf(patientId) ?? -1
				if (index !== -1) req.nutritionist?.patients.splice(index, 1)
				await req.nutritionist?.save()
				return res.status(200).json({ message: 'Patient deleted' })
			}
			throw new NotFound('Patient not found')
		} catch (error) {
			next(error)
		}
	}

	async checkDailyMeal(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
		try {
			const { mealId } = req.params
			if (!mealId) {
				throw new BadRequest('Meal ID is required!')
			}
			if (!req.patient) throw new ShouldNeverHappen('Checking a daily Meal')


			const meal = req.patient.diets!.at(0)!.meals!.find(meal => meal?._id?.toString() == mealId)
			if (!meal) {
				throw new NotFound('Meal not found')
			}

			const today = new Date().getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6

			if (req.patient.dailyMealRecord?.checkingDay === today) {
				if (!req.patient.dailyMealRecord.completedToday.includes(mealId)) req.patient.dailyMealRecord.completedToday.push(mealId)
			} else {
				req.patient.dailyMealRecord = {
					checkingDay: today,
					completedToday: [mealId],
				}
			}

			await req.patient.save()

			return res.status(200).json({ message: 'Meal record saved!' })
		} catch (error) {
			next(error)
		}
	}

}

export default new PatientController()