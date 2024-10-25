/**
 * Adiciona o prefixo de uma rota
 * @param path - String a ser adicionada
 * @param json - Json com os paths
 * @returns - JSON com paths reformulados
 */
export default function(path: string, json: any) {
    const rebasedJson: { [key: string]: any } = {};
    for (const key in json) {
        rebasedJson[`${path}/${key}`] = json[key]
    }
    return rebasedJson
}