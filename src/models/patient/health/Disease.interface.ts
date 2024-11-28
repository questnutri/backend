import { Schema } from "mongoose";

export interface IDisease extends Document {
    _id: Schema.Types.ObjectId
    name: string
    diagnosedAt: Date
    treatment: string
}

export const DiseaseSchema = new Schema<IDisease>({
    name: {
        type: String,
        required: true
    },
    diagnosedAt: {
        type: Date
    },
    treatment: {
        type: String
    }
}, { 
    timestamps: true
})

