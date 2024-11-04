export const NewFood_SchemaSwagger = {
	'type': 'object',
	'properties': {
		'quantity': {
			'type': 'number',
			'description': 'Quantity of the food item',
			'example': 1
		},
		'unit': {
			'type': 'string',
			'description': 'Unit of measurement for the quantity (e.g., grams, liters)',
			'minLength': 1
		},
		'obs': {
			'type': 'string',
			'description': 'Optional notes or observations about the food',
			'nullable': true
		}
	},
	'required': ['quantity', 'unit']
}
  