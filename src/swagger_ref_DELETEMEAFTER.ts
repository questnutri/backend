import auth from "./swagger/paths/auth";
import schemas from "./swagger/schemas_and_examples";
import swaggerResponse from "./swagger/utils/responses/status-code/response.swagger";

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
		"/auth/password/reset/patient/send": {
			"post": {
				"summary": "Send a token to the patient for reset password",
				"description": "This route sends a token to the patient to reset the password",
				"tags": [
					"Auth"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"requestBody": {
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/PasswordReset"
							},
							"examples": {
								"email-patient": {
									"value": {
										"email": "patient123@gmail.com"
									}
								}
							}
						}
					}
				},
				"responses": {
					"404": {
						"description": "There's no user with this email"
					},
					"200": {
						"description": "OK",
						"content": {
							"application/json": {
								"schema": {
									"type": "object",
									"properties": {
										"token": {
											"type": "string",
											"description": "JWT token"
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"/auth/password/reset/patient/validate/{token}": {
			"post": {
				"summary": "Reset patient password",
				"description": "This route resets the patient's password",
				"tags": [
					"Auth"
				],
				"parameters": [
					{
						"name": "token",
						"in": "path",
						"description": "Token sent to patient to change password",
						"required": true
					}
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"requestBody": {
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/NewPassword"
							},
							"examples": {
								"password-patient": {
									"value": {
										"password": "newPassword123"
									}
								}
							}
						}
					}
				},
				"responses": {
					"500": {
						"description": "Reseting a patient's password"
					},
					"200": {
						"description": "OK",
						"content": {
							"application/json": {
								"schema": {
									"type": "string",
									"description": "Password updated successfully"
								}
							}
						}
					}
				}
			}
		},
		"/admin/new-admin": {
			"post": {
				"summary": "Administrator registration",
				"description": "This route registers a new administrator",
				"tags": [
					"Administrator"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"requestBody": {
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/Administrator"
							},
							"examples": {
								"administrator": {
									"value": {
										"email": "adminTest@email.com",
										"password": "admin123"
									}
								}
							}
						}
					}
				},
				"responses": {
					"401": {
						"description": "Token not provided"
					},
					"400": {
						"description": "Invalid token"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/Administrator"
								}
							}
						}
					}
				}
			}
		},
		"/admin": {
			"get": {
				"summary": "Administrator by ID",
				"description": "This route returns an administrator by ID",
				"tags": [
					"Administrator"
				],
				"parameters": [
					{
						"name": "adminId",
						"in": "header",
						"description": "Id to perform the administrator search in the database",
						"required": true
					}
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"responses": {
					"404": {
						"description": "Admin not found"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/AdminSummary"
								}
							}
						}
					}
				}
			},
			"patch": {
				"summary": "Update the administrator",
				"description": "This route updates the administrator's registration",
				"tags": [
					"Administrator"
				],
				"parameters": [
					{
						"name": "adminId",
						"in": "header",
						"description": "Id to perform the administrator search in the database",
						"required": true
					}
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"requestBody": {
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/Administrator"
							},
							"examples": {
								"administrator": {
									"value": {
										"email": "upadtedAdminTest@email.com",
										"password": "UpdatedAdmin123"
									}
								}
							}
						}
					}
				},
				"responses": {
					"404": {
						"description": "Admin not found"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/AdminSummary"
								}
							}
						}
					}
				}
			}
		},
		"/admin/nutritionist": {
			"get": {
				"summary": "All nutritionists",
				"description": "This route return all nutritionists",
				"tags": [
					"Administrator"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"responses": {
					"401": {
						"description": "Token not provided"
					},
					"400": {
						"description": "Invalid token"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "array",
									"items": {
										"$ref": "#/components/schemas/NutritionistSummary"
									}
								}
							}
						}
					}
				}
			}
		},
		"/admin/nutritionist/{nutritionistId}": {
			"get": {
				"summary": "A specific nutritionist",
				"description": "This route return a specific nutritionist",
				"tags": [
					"Administrator"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"name": "nutritionistId",
						"in": "path",
						"description": "Id to perform the nutritionist search in the database",
						"required": true
					}
				],
				"responses": {
					"500": {
						"description": "Getting nutri info"
					},
					"404": {
						"description": "Nutritionist not found"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/NutritionistSummary"
								}
							}
						}
					}
				}
			}
		},
		"/admin/patient": {
			"get": {
				"summary": "All patients",
				"description": "This route returns all patients",
				"tags": [
					"Administrator"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"responses": {
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "array",
									"items": {
										"type": "object",
										"properties": {
											"_id": {
												"type": "string"
											},
											"name": {
												"type": "string"
											},
											"createdAt": {
												"type": "string"
											},
											"updatedAt": {
												"type": "string"
											},
											"diets": {
												"type": "array",
												"items": {
													"$ref": "#/components/schemas/Diet"
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"/admin/patient/{patientId}": {
			"get": {
				"summary": "All patients",
				"description": "This route returns all patients",
				"tags": [
					"Administrator"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"name": "patientId",
						"in": "path",
						"description": "Id to perform the patient search in the database",
						"required": true
					}
				],
				"responses": {
					"500": {
						"description": "Finding a patient"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"properties": {
										"_id": {
											"type": "string"
										},
										"name": {
											"type": "string"
										},
										"createdAt": {
											"type": "string"
										},
										"updatedAt": {
											"type": "string"
										},
										"diets": {
											"type": "array",
											"items": {
												"$ref": "#/components/schemas/Diet"
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"/nutritionist": {
			"get": {
				"summary": "All nutritionists",
				"description": "This route return all nutritionists",
				"tags": [
					"Nutritionist"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"responses": {
					"500": {
						"description": "Getting nutri info"
					},
					"404": {
						"description": "Nutritionist not found"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/NutritionistSummary"
								}
							}
						}
					}
				}
			}
		},
		"/nutritionist/patient": {
			"get": {
				"summary": "All patients",
				"description": "This route returns all patients",
				"tags": [
					"Nutritionist"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"name": "nutritionistId",
						"in": "header",
						"description": "Id to perform the nutritionist search in the database",
						"required": true
					}
				],
				"responses": {
					"500": {
						"description": "Getting all patients from one nutritionist"
					},
					"200": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/NutritionistSummary"
								}
							}
						}
					}
				}
			},
			"post": {
				"summary": "",
				"description": "",
				"tags": [
					"Nutritionist"
				],
				"parameters": [
					{
						"name": "nutritionistId",
						"in": "header",
						"description": "",
						"required": true
					}
				],
				"requestBody": {
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/Patient"
							},
							"examples": {
								"patient": {
									"value": {
										"name": "Paciente de teste",
										"email": "patientTest@email.com",
										"password": "patient123"
									}
								}
							}
						}
					}
				},
				"responses": {
					"500": {
						"description": "Creating a new patient to a nutritionist"
					},
					"201": {
						"description": "OK",
						"content": {
							"aplication/json": {
								"schema": {
									"type": "object",
									"$ref": "#/components/schemas/NutritionistSummary"
								}
							}
						}
					}
				}
			}
		}
	},
	"components": {
		"schemas": {
			...schemas,
			"Administrator": {
				"type": "object",
				"properties": {
					"email": {
						"type": "string"
					},
					"password": {
						"type": "string"
					}
				}
			},
			"AdminSummary": {
				"type": "object",
				"properties": {
					"Id": {
						"type": "string"
					},
					"email": {
						"type": "string"
					}
				}
			},
			"NutritionistSummary": {
				"type": "object",
				"properties": {
					"patients": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"_id": {
									"type": "string"
								}
							}
						}
					},
					"_id": {
						"type": "string"
					},
					"name": {
						"type": "string"
					},
					"email": {
						"type": "string"
					},
					"createdAt": {
						"type": "string"
					},
					"updatedAt": {
						"type": "string"
					}
				}
			},
			"Patient": {
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
			},

			"PasswordReset": {
				"type": "object",
				"properties": {
					"email": {
						"type": "string"
					}
				}
			},
			"NewPassword": {
				"type": "object",
				"properties": {
					"password": {
						"type": "string"
					}
				}
			},
			"Meal": {
				"type": "object",
				"properties": {
					"daysOfWeek": {
						"type": "array",
						"items": {
							"type": "string"
						}
					},
					"name": {
						"type": "string"
					},
					"hour": {
						"type": "string"
					},
					"_id": {
						"type": "string"
					},
					"foods": {
						"type": "array",
						"items": {
							"type": "string"
						}
					}
				}
			},
			"Diet": {
				"type": "object",
				"properties": {
					"name": {
						"type": "string"
					},
					"_id": {
						"type": "string"
					},
					"meals": {
						"type": "array",
						"items": {
							"$ref": "#/components/schemas/Meal"
						}
					}
				}
			}
		},
		"securitySchemes": {
			"bearerAuth": {
				"type": "http",
				"scheme": "bearer",
				"bearerFormat": "JWT"
			}
		}
	}
}