import { Router } from 'express'
import alimentController from '../../controllers/aliment.controller'
// import { validateDto } from '../../middlewares/validate/validateDto.middleware'
import fctx from '../../controllers/findContext.controller'

const alimentRoutes = Router()

alimentRoutes.route('/')
	.get(alimentController.getAllAliments)

alimentRoutes.route('/:alimentId')
	.get(alimentController.getAlimentById)

export default alimentRoutes