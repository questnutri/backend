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

routes.get('/swagger.json', (req, res) => {
	const protocol = req.protocol
	const host = req.get('host')

	const dynamicSwagger = {
		...swaggerDocs,
		servers: [
			{
				url: `${protocol}://${host}/api/v1`,
				description: 'Dynamic server based on request host'
			},
			...swaggerDocs.servers
		]
	}

	res.json(dynamicSwagger)
})

routes.use('/auth', authRoutes)
routes.use('/patients', authLogin, guardRole, patientRoutes)
routes.use('/nutritionists', authLogin, guardRole, nutritionistRoutes)
routes.use('/admin', authLogin, guardRole, adminRoutes)
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(undefined, {
	swaggerUrl: '/api/v1/swagger.json'
}))
routes.use('/health', healthRoutes)
routes.use('/aliments/taco', alimentRoutes)

export default routes