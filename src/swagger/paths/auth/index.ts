import SwaggerMethod from "../../v2.0/class/SwaggerMethod";
import SwaggerContent from "../../v2.0/class/SwaggerContent";
import SwaggerResponse from "../../v2.0/class/SwaggerResponse";
import SwaggerUrlLeaf from "../../v2.0/class/SwaggerUrlLeaf";
import SwaggerUrlTree from "../../v2.0/class/SwaggerUrlTree";
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
						SwaggerMethod.builder()
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
							SwaggerMethod.builder()
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
							SwaggerMethod.builder()
								.post()
								.setSummary('Creates a new nutritionist')
								.setDescription('This route registers a new Nutritionist')
								.setRequestBody(
									SwaggerContent.builder()
										.setSchemaAndExample(SwaggerSchema.Nutritionist.Register) //<< It access schema and example if exist in class
									// .setSchema(SwaggerSchema.Nutritionist.Register.schema) << Equivalent
									// .addExample(SwaggerSchema.Nutritionist.Register.example) << Equivalent
								)
								.addResponses(
									[
										SwaggerResponse.builder()
											.setCode(HttpStatus.CREATED)
											.setDescription('Nutritionist created')
											.setContent(
												SwaggerContent.builder()
													.setSchema(SwaggerSchema.Nutritionist.schema)
											),
										SwaggerResponse.builder()
											.setCode(HttpStatus.BAD_REQUEST)
											.setDescription('Bad request')
											.setContent(
												SwaggerContent.builder()
													.setSchema(SwaggerSchema.Error.schema)
													.addExample(SwaggerSchema.Error.Registration.validationErrors)
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
						SwaggerMethod.builder()
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
