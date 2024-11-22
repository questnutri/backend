import { Document, Schema } from 'mongoose'

export interface Weight extends Document {
    value: number
    imc?: number
}

export const WeightSchema = new Schema<Weight>({
	value: {
		type: Number,
		required: true,
	},
    imc: {
        type: Number,
    }
}, {timestamps: true})