import { GetMeal_SchemaSwagger, NewMeal_SchemaSwagger } from '../meal'

export const Diet_SchemaSwagger = {
	type: 'object',
	properties: {
		name: {
			type: 'string',
			example: 'Segunda dieta'
		}
	}
}

export const Diet_SwaggerExample = {
	diet: {
		name: 'diet 01',
	}
}

export const GetDiet_Schema = {
	type: 'array',
	items: {
		type: 'object',
		properties: {
			name: {
				type: 'string',
				example: 'Primeira dieta',
			},
			_id: {
				type: 'string',
				example: '65f8a2b7c4d5e6f7890ab456',
			},
			meals: {
				type: 'array',
				items: GetMeal_SchemaSwagger,
			},
			createdAt: {
				type: 'string',
				example: '2025-02-27T10:00:00Z',
			},
			updatedAt: {
				type: 'string',
				example: '2025-02-27T12:30:00Z',
			},
		},
	},
}


export const NewDietResponse_Schema = {

	type: 'object',
	properties: {
		_id: {
			type: 'string',
			description: 'Unique identifier for the patient',
		},
		name: {
			type: 'string',
			description: 'Name of the patient',
		},
		email: {
			type: 'string',
			description: 'Email of the patient',
		},
		nutri: {
			type: 'string',
			description: 'Unique identifier for the nutritionist assigned to the patient',
		},
		diets: {
			type: 'array',
			description: 'List of diets assigned to the patient',
			items: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
						description: 'Name of the diet',
					},
					_id: {
						type: 'string',
						description: 'Unique identifier for the diet',
					},
					meals: {
						type: 'array',
						description: 'List of meals included in the diet',
						items: {
							type: 'object'
						}
					},
					createdAt: {
						type: 'string',
						description: 'Date when the diet was created',
					},
					updatedAt: {
						type: 'string',
						description: 'Date when the diet was last updated',
					}
				}
			}
		},
		createdAt: {
			type: 'string',
			description: 'Date when the patient was created',
		},
		updatedAt: {
			type: 'string',
			description: 'Date when the patient information was last updated',
		},
		__v: {
			type: 'integer',
			description: 'Version key for the patient data',
		}
	},
	required: ['_id', 'name', 'email', 'nutri', 'diets', 'createdAt', 'updatedAt']


}

export const DeleteDiet_Schema = {
	type: 'object',
	properties: {
		message: {
			type: 'string',
			example: 'Diet deleted successfully'
		}
	}
}