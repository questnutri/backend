export default abstract class SwaggerSchema_Aliment {
    public static schema = {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                alimentGroup: { type: 'string' },
                kcal: { type: 'string' },
                carb: { type: 'string' },
                protein: { type: 'string' },
                fat: { type: 'string' }
            }
        }
    }

    public static example = [
        {
            _id: '65f8a2b7c4d5e6f7890ab456',
            name: 'Arroz, tipo 1, cozido',
            alimentGroup: 'Cereais e derivados',
            kcal: '128,2584857',
            carb: '28,05985',
            protein: '2,520816667',
            fat: '0,227'
        },
        {
            _id: '65f8a2b7c4d5e6f7890ab457',
            name: 'Ovo, de galinha, inteiro, frito',
            alimentGroup: 'Ovos e derivados',
            kcal: '240,187224',
            carb: '1,193666667',
            protein: '15,61666667',
            fat: '18,59266667'
        }
    ]
}
