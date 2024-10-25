
/**
 * Gera uma estrutura de resposta JSON que combina um esquema de validação com exemplos opcionais.
 * 
 * @param schema - O esquema JSON que define a estrutura e as validações dos dados da resposta.
 * @param examples - Exemplo(s) opcional(is) de resposta para ilustrar valores esperados.
 * @returns Um objeto JSON que contém o esquema e exemplos formatados em `application/json`.
 */
export default function (schema: any, examples?: any) {
    return {
        "aplication/json": {
            "schema": {
                ...schema,
            },
            "examples": {
                ...examples
            }
        }
    }
}