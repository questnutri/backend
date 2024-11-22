import { Router } from 'express'
import fctx from '../../controllers/findContext.controller'
import adminController from '../../controllers/admin.controller'
import nutritionistController from '../../controllers/nutritionist.controller'
import nutritionistRoutes from '../nutritionists'
import patientController from '../../controllers/patient/patient.controller'
import patientRoutes from '../patients'
import { validateDto } from '../../middlewares/validate/validateDto.middleware'
import CreateAdminDto from '../../models/admin/dto/create.admin.dto'
import UpdateAdminDto from '../../models/admin/dto/update.admin.dto'

const adminRoutes = Router()

adminRoutes.route('/')
	.get(adminController.getById)
	.patch(validateDto(UpdateAdminDto), adminController.updateById)

adminRoutes.route('/new-admin')
	.post(validateDto(CreateAdminDto), adminController.create)

adminRoutes.route('/nutritionist')
	.get(nutritionistController.getAll)

adminRoutes.use('/nutritionist/:nutritionistId', fctx.injectNutritionist, nutritionistRoutes)

adminRoutes.route('/patient')
	.get(patientController.getAllAsAdmin)

adminRoutes.use('/patient/:patientId', fctx.injectPatient, patientRoutes)


export default adminRoutes