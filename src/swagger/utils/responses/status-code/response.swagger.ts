export default function swaggerResponse(code: number, description: string = 'Ok', content?: any) {
    return {
        [`${code}`]: {
            description,
            content: {
                ...content
            }
        }
    }
}