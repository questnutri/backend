export const Login_SwaggerSchema = {
    "type": "object",
    "properties": {
        "email": {
            "type": "string"
        },
        "password": {
            "type": "string"
        }
    }
}

export const Login_SwaggerExample = {
    "login": {
        "email": "example@mail.com",
        "password": "password_example"
    }
}