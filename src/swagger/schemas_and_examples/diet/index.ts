import { GetMeal_SchemaSwagger, NewMeal_SchemaSwagger } from '../meal'

export const Diet_SchemaSwagger = {
	'type': 'object',
	'properties': {
		'name': {
			'type': 'string'
		}
	}
}

export const Diet_SwaggerExample = {
	'diet': {
		'name': 'diet 01',
	}
}

export const GetDiet_Schema = {
	'type':'array',
	'items': {
		'type': 'object',
		'properties': {
			'name': {
				'type': 'string'
			},
			'_id': {
				'type': 'string'
			},
			'meals':{
				'type': 'array',
				'items': GetMeal_SchemaSwagger
			},
			'createdAt': {
				'type': 'string'
			},
			'updatedAt': {
				'type': 'string'
			}
		}
	}
}

export const NewDietResponse_Schema = {

	'type': 'object',
	'properties': {
		  '_id': {
			'type': 'string',
			'description': 'Unique identifier for the patient',
		  },
		  'name': {
			'type': 'string',
			'description': 'Name of the patient',
		  },
		  'email': {
			'type': 'string',
			'description': 'Email of the patient',
		  },
		  'nutri': {
			'type': 'string',
			'description': 'Unique identifier for the nutritionist assigned to the patient',
		  },
		  'diets': {
			'type': 'array',
			'description': 'List of diets assigned to the patient',
			'items': {
				'type': 'object',
				'properties': {
					'name': {
						'type': 'string',
						'description': 'Name of the diet',
					},
					'_id': {
						'type': 'string',
						'description': 'Unique identifier for the diet',
					},
					'meals': {
						'type': 'array',
						'description': 'List of meals included in the diet',
						'items': {
							'type': 'object'
						}
					},
					'createdAt': {
						'type': 'string',
						'description': 'Date when the diet was created',
					},
					'updatedAt': {
						'type': 'string',
						'description': 'Date when the diet was last updated',
					}
				}
			}
		  },
		  'createdAt': {
			'type': 'string',
			'description': 'Date when the patient was created',
		  },
		  'updatedAt': {
			'type': 'string',
			'description': 'Date when the patient information was last updated',
		  },
		  '__v': {
			'type': 'integer',
			'description': 'Version key for the patient data',
		  }
	},
	'required': ['_id', 'name', 'email', 'nutri', 'diets', 'createdAt', 'updatedAt']

	  
}