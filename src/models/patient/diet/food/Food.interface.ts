import { Document, ObjectId, Schema } from 'mongoose'

export interface Food extends Document {
	aliment?: ObjectId | null
    quantity: number
    unit: string
    obs?: string
    // subFoods?: SubFood[]
}

export const FoodSchema = new Schema<Food>({
	aliment: {
		type: [Schema.Types.ObjectId],
		ref: 'Aliment',
		default: null
	},
	quantity: {
		type: Number,
		required: true,
	},
	unit: {
		type: String,
		required: true,
	},
	obs: {
		type: String
	}
})