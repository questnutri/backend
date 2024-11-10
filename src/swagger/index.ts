import paths from './paths'
import 'dotenv/config'
import schemas from './schemas_and_examples'

export default {
	'openapi': '3.0.0',
	'info': {
		'title': '',
		'description': '',
		'contact': {
			'email': 'email@gmail.com'
		},
		'version': '1.0.0'
	},
	'servers': [
		{
			'url': `http://localhost:${process.env.PORT || 3000}/api/v1`,
			'description': 'Local Environment.'
		},
		{
			'url': 'https://backend-ssj4.onrender.com/api/v1',
			'description': 'Production Environment'
		}
	],
	'paths': {
		...paths
	},
	'components': {
		'schemas': {
			...schemas,
		},
		securitySchemes: {
			bearerAuth: {
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT',
			},
		},
	},

}