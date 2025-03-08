import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
import SwaggerUtil from "../../v2.0/class/SwaggerUtil";
import SwaggerSchema from "../../v2.0/schemas/SwaggerSchema";
import SwaggerShared from "../../v2.0/shared/SwaggerShared/SwaggerShared";
import { HttpStatus } from "../../v2.0/shared/utils/HttpStatus.enum";


export default SwaggerUrlTree.builder()
	.setPath('/auth')
	.addTags(["Auth"])
	.addBranch(
		SwaggerUrlTree.builder()
			.setPath('/admin')
			.addLeaf(
				SwaggerUrlLeaf.builder()
					.setPath('/login')
					.addMethods(
						SwaggerMethod
							.post()
							.setSummary('Admin login')
							.setDescription('This route tries to log in an admin user')
							.setRequestBody(
								SwaggerShared.RequestBody.login
							)
							.addResponses(
								SwaggerShared.Responses.login
							)
					)
			))
	.addBranch(
		SwaggerUrlTree.builder()
			.setPath('/nutritionist')
			.addTags(["Nutritionist"])
			.addLeaves(
				[
					SwaggerUrlLeaf.builder()
						.setPath('/login')
						.addMethods(
							SwaggerMethod
								.post()
								.setSummary('Nutritionist login')
								.setDescription('This route tries to log in a nutritionist')
								.setRequestBody(
									SwaggerShared.RequestBody.login
								)
								.addResponses(
									SwaggerShared.Responses.login
								)
						)
					,
					SwaggerUrlLeaf.builder()
						.setPath('/register')
						.addMethods(
							SwaggerMethod
								.post()
								.setSummary('Creates a new nutritionist')
								.setDescription('This route registers a new Nutritionist')
								.setRequestBody(
									SwaggerUtil.Response.application_json(
										SwaggerSchema.Nutritionist.Register.schema,
										SwaggerSchema.Nutritionist.Register.example
									)
								)
								.addResponses(
									[
										SwaggerResponse.builder()
											.setCode(HttpStatus.OK)
											.setDescription('Nutritionist created')
											.setContent(
												SwaggerUtil.Response.application_json(
													SwaggerSchema.Nutritionist.schema.schema
												)
											),
										SwaggerResponse.builder()
											.setCode(HttpStatus.BAD_REQUEST)
											.setDescription('Bad request')
											.setContent(
												SwaggerUtil.Response.application_json(
													SwaggerSchema.Error.schema,
													SwaggerSchema.Error.Registration.validationErrors
												)
											)
									]
								)
						)
				]
			)
	)
	.addBranch(
		SwaggerUrlTree.builder()
			.setPath('/patient')
			.addLeaf(
				SwaggerUrlLeaf.builder()
					.setPath('/login')
					.addMethods(
						SwaggerMethod
							.post()
							.setSummary('Patient login')
							.setDescription('This route tries to log in a patient')
							.setRequestBody(
								SwaggerShared.RequestBody.login
							)
							.addResponses(
								SwaggerShared.Responses.login
							)
					)
			)
	)
	.toJson()
