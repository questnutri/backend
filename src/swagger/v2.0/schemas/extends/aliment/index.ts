export default abstract class SwaggerSchema_Aliment {
    public static schema = {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '65f8a2b7c4d5e6f7890ab456',
                },
                name: {
                    type: 'string',
                    example: 'Arroz, tipo 1, cozido',
                },
                alimentGroup: {
                    type: 'string',
                    example: 'Cereais e derivados',
                },
                kcal: {
                    type: 'string',
                    example: '128,2584857',
                },
                carb: {
                    type: 'string',
                    example: '28,05985',
                },
                protein: {
                    type: 'string',
                    example: '2,520816667',
                },
                fat: {
                    type: 'string',
                    example: '0,227',
                },
            },
        },
        example: [
            {
                _id: '65f8a2b7c4d5e6f7890ab456',
                name: 'Arroz, tipo 1, cozido',
                alimentGroup: 'Cereais e derivados',
                kcal: '128,2584857',
                carb: '28,05985',
                protein: '2,520816667',
                fat: '0,227',
            },
            {
                _id: '65f8a2b7c4d5e6f7890ab457',
                name: 'Ovo, de galinha, inteiro, frito',
                alimentGroup: 'Ovos e derivados',
                kcal: '240,187224',
                carb: '1,193666667',
                protein: '15,61666667',
                fat: '18,59266667',
            },
        ],
    }
}
