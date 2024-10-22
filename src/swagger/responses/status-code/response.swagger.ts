export default function responseSwagger(code: number, description: string = 'Ok', content?: any) {
    return {
        number: {
            description,
            content
        }
    }
}