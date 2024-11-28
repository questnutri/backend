import { Schema } from "mongoose"

export interface IMedication extends Document {
    _id: Schema.Types.ObjectId
    name: string,
    dosage?: string
    frequency?: string
}

export const MedicationSchema = new Schema<IMedication>({
    name: {
        type: String,
        required: true
    },
    dosage: {
        type: String
    },
    frequency: {
        type: String
    },
}, { 
    timestamps: true,
})