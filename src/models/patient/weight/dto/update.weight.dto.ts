import { IsNumber } from 'class-validator'

export class UpdateWeightDto {
    @IsNumber()
    	value!: number

    @IsNumber()
    	imc!: string
}
