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

    //@IsStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1})
    password?: string
}
