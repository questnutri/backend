import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateWeightDto {
    @IsNotEmpty()
    @IsNumber()
    	value!: number

    @IsNumber()
    	imc!: string
}
