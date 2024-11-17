import { Router } from 'express'
import patientRoutes from './patients'
import nutritionistRoutes from './nutritionists'
import adminRoutes from './admin'
import authRoutes from './auth'
import { authLogin} from '../middlewares/auth/auth.middleware'
import healthRoutes from './health'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../swagger'

const routes = Router()
routes.use('/auth', authRoutes)
routes.use('/patient', authLogin, patientRoutes)
routes.use('/nutritionist', authLogin, nutritionistRoutes)
routes.use('/admin', authLogin, adminRoutes)
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
routes.use('/health', healthRoutes)

export default routes