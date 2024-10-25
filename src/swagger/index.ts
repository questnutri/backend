import paths from "./paths";
import schemas from "./schemas_and_examples";

export default {
	"openapi": "3.0.0",
	"info": {
		"title": "",
		"description": "",
		"contact": {
			"email": "email@gmail.com"
		},
		"version": "1.0.0"
	},
	"servers": [
		{
			"url": "http://localhost:3000/api/v1",
			"description": "API de desenvolvimento."
		},
		{
			"url": "http://www.api/v1.com.br",
			"description": "API de produção."
		}
	],
    "paths": {
		...paths
    },
    "components": {
		"schemas": {
			...schemas,
        }
    }
}