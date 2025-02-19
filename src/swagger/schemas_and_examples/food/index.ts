export const NewFood_SchemaSwagger = {
	type: 'object',
	properties: {
		quantity: {
			type: 'number',
			description: 'Quantity of the food item',
			example: 1
		},
		unit: {
			type: 'string',
			description: 'Unit of measurement for the quantity (e.g., grams, liters)',
			minLength: 1
		},
		obs: {
			type: 'string',
			description: 'Optional notes or observations about the food',
			nullable: true
		}
	},
	required: ['quantity', 'unit']
}

export const GetAllFoods_SchemaSwagger = {
	type: 'array',
	items: {
		type: 'object',
		properties: {
			quantity: {
				type: 'number',
				description: 'Quantity of the food item',
			},
			unit: {
				type: 'string',
				description: 'Unit of measurement for the quantity (e.g., grams, liters)',
			},
			obs: {
				type: 'string',
				description: 'Optional notes or observations about the food',
			}
		}
	}
}
export const GetFoodById_SchemaSwagger = {
	type: 'object',
	properties: {
		quantity: {
			type: 'number',
			description: 'Quantity of the food item',
		},
		unit: {
			type: 'string',
			description: 'Unit of measurement for the quantity (e.g., grams, liters)',
		},
		obs: {
			type: 'string',
			description: 'Optional notes or observations about the food',
		}
	}
}