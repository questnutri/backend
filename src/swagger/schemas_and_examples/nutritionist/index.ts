export const Nutritionist_SwaggerSchema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "patients": {
            "type": "string"
        },
    }
}

export const NewNutritionist_SwaggerSchema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "password": {
            "type": "string"
        }
    }
}

export const NewNutritionist_SwaggerExample = {
    "nutritionist": {
        "value": {
            "name": "Pedro",
            "email": "newNutritionist123@gmail.com",
            "password": "nutritionist123"
        }
    }
}