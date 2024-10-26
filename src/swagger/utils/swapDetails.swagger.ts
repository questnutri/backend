/**
 * Combina dois objetos, `original` e `mods`, mesclando as propriedades de `mods` em `original`.
 * 
 * @param original - Objeto original a ser modificado.
 * @param mods - Objeto contendo propriedades que serão mescladas no objeto original.
 * @returns Novo objeto resultante da mesclagem de `original` e `mods`.
 */
export function swapSingleRoot(original: any, mods: any) {
	return {
		...original,
		...mods,
	}
}

/**
 * Cria uma cópia profunda de um objeto `rootLoop` e substitui ou insere um array de tags para cada método presente.
 * 
 * @param tags - Array de tags que será atribuído a cada método em `rootLoop`.
 * @param rootLoop - Objeto que contém os métodos nos quais as tags serão inseridas ou substituídas.
 * @returns Uma cópia de `rootLoop` com as tags atualizadas para cada método.
 */
export function swapTagMultipleRoot(tags: string[], rootLoop: any) {
	const copyRootLoop = JSON.parse(JSON.stringify(rootLoop))  // Copia profunda

	for(const path in copyRootLoop) {
		for(const method in copyRootLoop[path]) {
			copyRootLoop[path][method].tags = tags
		}
	}

	return copyRootLoop
}

/**
 * Adiciona um array de parâmetros a cada método presente em `rootLoop`, preservando os parâmetros existentes.
 * 
 * @param parameters - Array de parâmetros a ser adicionado aos métodos em `rootLoop`.
 * @param rootLoop - Objeto que contém os métodos nos quais os parâmetros serão inseridos.
 */
export function injectParameter(parameters: any[], rootLoop: any) {
	for(const path in rootLoop) {
		for(const method in rootLoop[path]) {
			rootLoop[path][method].parameters = [
				...(rootLoop[path][method].parameters || []),
				...parameters,
			]
		}
	}
}