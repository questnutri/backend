import { IsNotEmpty, IsString, IsEmail, IsStrongPassword } from 'class-validator'

export class CreatePatientDto {
	@IsNotEmpty()
	@IsString()
	firstName!: string

	@IsString()
	lastName!: string

	@IsNotEmpty()
	@IsEmail()
	email!: string
}
