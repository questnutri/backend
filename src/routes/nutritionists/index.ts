import { Router } from 'express'
import nutritionistController from '../../controllers/nutritionist.controller'
import patientController from '../../controllers/patient/patient.controller'
import patientHealthController from '../../controllers/patient/health/patient.health.controller'
import { validateDto } from '../../middlewares/validate/validateDto.middleware'
import { CreatePatientDto } from '../../models/patient/dto/create.patient.dto'
import { UpdatePatientDto } from '../../models/patient/dto/update.patient.dto'
import dietRoutes from '../patients/diet/diet.routes'
import fctx from '../../controllers/findContext.controller'
import weightController from '../../controllers/patient/weight/weight.controller'
import dietController from '../../controllers/patient/diet/diet.controller'

const nutritionistRoutes = Router()

nutritionistRoutes.route('/').all(fctx.findNutritionist)
	.get(nutritionistController.getById)
	.patch(nutritionistController.updateById)

nutritionistRoutes.route('/patient').all(fctx.findNutritionist)
	.get(patientController.getAll)
	.post(validateDto(CreatePatientDto), patientController.create, fctx.findPatient, dietController.createFirstDiet)

nutritionistRoutes.route('/patient/:patientId').all(fctx.findNutritionist, fctx.injectPatient, fctx.findPatient)
	.get(patientController.getPatient)
	.patch(validateDto(UpdatePatientDto), patientController.updateById)
	.delete(patientController.deleteById)

nutritionistRoutes.route('/patient/:patientId/medication').all(fctx.findNutritionist, fctx.injectPatient, fctx.findPatient)
	.post(patientHealthController.createNewMedication)

nutritionistRoutes.route('/patient/:patientId/medication/:medicationId').all(fctx.findNutritionist, fctx.injectPatient, fctx.findPatient)
	.patch(patientHealthController.updateCurrentMedication)
	.delete(patientHealthController.deleteCurrentMedication)

nutritionistRoutes.route('/patient/:patientId/disease').all(fctx.findNutritionist, fctx.injectPatient, fctx.findPatient)
	.post(patientHealthController.createNewDisease)

nutritionistRoutes.route('/patient/:patientId/disease/:diseaseId').all(fctx.findNutritionist, fctx.injectPatient, fctx.findPatient)
	.patch(patientHealthController.updateDisease)
	.delete(patientHealthController.deleteDisease)

	nutritionistRoutes.route('/patient/:patientId/allergy').all(fctx.findNutritionist, fctx.injectPatient, fctx.findPatient)
	.post(patientHealthController.createNewAllergy)

nutritionistRoutes.route('/patient/:patientId/allergy/:allergyId').all(fctx.findNutritionist, fctx.injectPatient, fctx.findPatient)
	.patch(patientHealthController.updateAllergy)
	.delete(patientHealthController.deleteAllergy)

nutritionistRoutes.route('/patient/:patientId/weight').all(fctx.injectPatient, fctx.findPatient)
	.get(weightController.getAllWeights)
	.post(weightController.createWeight, weightController.getWeightById)

nutritionistRoutes.route('/patient/:patientId/weight/:weightId').all(fctx.injectPatient, fctx.findPatient)
	.get(weightController.getWeightById)
	.patch(weightController.updateWeightById, weightController.getWeightById)
	.delete(weightController.deleteWeightById)

nutritionistRoutes.use('/patient/:patientId/diet', fctx.injectPatient, dietRoutes)

export default nutritionistRoutes