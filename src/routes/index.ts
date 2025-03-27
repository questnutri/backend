import { Router } from 'express'
import patientRoutes from './patients'
import nutritionistRoutes from './nutritionists'
import adminRoutes from './admin'
import authRoutes from './auth'
import alimentRoutes from './aliment'
import { authLogin, guardRole } from '../middlewares/auth/auth.middleware'
import healthRoutes from './health'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../swagger'

const routes = Router()
routes.get('/', (req, res) => {
	res.redirect('/api/v1/docs')
})
routes.use('/auth', authRoutes)
routes.use('/patients', authLogin, guardRole, patientRoutes)
routes.use('/nutritionists', authLogin, guardRole, nutritionistRoutes)
routes.use('/admin', authLogin, guardRole, adminRoutes)
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
routes.use('/health', healthRoutes)
routes.use('/aliment/taco', alimentRoutes)

export default routes