import { GetAllFoods_SchemaSwagger } from '../food'

export const NewMeal_SchemaSwagger = {
	type: 'object',
	properties: {
		name: {
			type: 'string',
			description: 'Name of the meal',
			minLength: 1
		},
		hour: {
			type: 'string',
			description: 'Time of the meal in HH:mm format',
			pattern: '^([01]?[0-9]|2[0-3]):([0-5][0-9])$',
			example: '14:30'
		},
		obs: {
			type: 'string',
			description: 'Optional notes or observations about the meal',
			nullable: true
		},
		daysOfWeek: {
			type: 'array',
			description: 'Days of the week when the meal is scheduled',
			items: {
				type: 'string',
				enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
			}
		}
	},
	required: ['name', 'hour', 'daysOfWeek']
}
export const GetMeal_SchemaSwagger = {
	type: 'object',
	properties: {
		_id: {
			type: 'string',
			example: '65f8a2b7c4d5e6f7890ab789',
		},
		name: {
			type: 'string',
			description: 'Name of the meal',
			example: 'Café da Manhã',
		},
		hour: {
			type: 'string',
			description: 'Time of the meal in HH:mm format',
			example: '07:30',
		},
		obs: {
			type: 'string',
			description: 'Optional notes or observations about the meal',
			example: 'Evitar café com açúcar',
		},
		daysOfWeek: {
			type: 'array',
			description: 'Days of the week when the meal is scheduled',
			items: {
				type: 'string',
				enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			},
			example: ['Monday', 'Wednesday', 'Friday'],
		},
		foods: {
			type: 'array',
			items: {
				...GetAllFoods_SchemaSwagger,
			},
		},
	},
}

