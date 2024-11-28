import { Schema } from "mongoose";

export interface IAllergy extends Document {
    _id: Schema.Types.ObjectId,
    name: string
    severity: 'mild' | 'moderate' | 'severe'
    obs: string
}

export const AllergySchema = new Schema<IAllergy>({
    name: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        enum: ['mild', 'moderate', 'severe'],
        required: true
    },
    obs: {
        type: String
    }
}, { 
    timestamps: true
})

