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
			_id: {
				type: 'string',
				description: 'Id food',
				example: '6748ad34e32acd1891da66c6'
			},
			quantity: {
				type: 'number',
				description: 'Quantity of the food item',
				example: 200,
			},
			aliment: {
				type: 'string',
				description: 'Id aliment food',
				example: '6740da1fe4da69d48df0d5bc'
			},
			unit: {
				type: 'string',
				description: 'Unit of measurement for the quantity (e.g., grams, liters)',
				example: 'grams',
			},
			obs: {
				type: 'string',
				description: 'Optional notes or observations about the food',
				example: 'Preferir integral',
			},
		},
	},
}

export const GetFoodById_SchemaSwagger = {
	type: 'object',
	properties: {
		_id: {
			type: 'string',
			description: 'Id food',
			example: '6748ad34e32acd1891da66c6'
		},
		quantity: {
			type: 'number',
			description: 'Quantity of the food item',
			example: 200,
		},
		aliment: {
			type: 'string',
			description: 'Id aliment food',
			example: '6740da1fe4da69d48df0d5bc'
		},
		unit: {
			type: 'string',
			description: 'Unit of measurement for the quantity (e.g., grams, liters)',
			example: 'grams',
		},
		obs: {
			type: 'string',
			description: 'Optional notes or observations about the food',
			example: 'Preferir integral',
		},
	},
}