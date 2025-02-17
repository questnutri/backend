import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export default class CreateNutritionistDto {
    @IsNotEmpty()
    @IsString()
    firstName!: string

    @IsString()
    lastName?: string

    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsNotEmpty()
    //@IsStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1})
    password!: string

}
