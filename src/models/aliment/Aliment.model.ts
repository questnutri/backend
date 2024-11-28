import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface IAliment extends Document {
    name: string
    alimentGroup: string
    kcal: string
    kJ: string
    carb: string
    protein: string
    fat: string
    humidity: string
    dietaryFiber: string
    cholesterol: string
    sodium: string
    calcium: string
    magnesium: string
    manganese: string
    phosphorus: string
    iron: string
    potassium: string
    copper: string
    zinc: string
    retinol: string
    RE: string
    RAE: string
    thiamine: string
    riboflavin: string
    pyridoxine: string
    niacin: string
    vitaminC: string
    ash: string
}

export const AlimentSchema = new Schema<IAliment>({
    name: {
        type: String,
    },
    alimentGroup: {
        type: String,
    },
    kcal: {
        type: String,
    },
    kJ: {
        type: String,
    },
    carb: {
        type: String,
    },
    protein: {
        type: String,
    },
    fat: {
        type: String,
    },
    humidity: {
        type: String,
    },
    dietaryFiber: {
        type: String,
    },
    cholesterol: {
        type: String,
    },
    sodium: {
        type: String,
    },
    calcium: {
        type: String,
    },
    magnesium: {
        type: String,
    },
    manganese: {
        type: String,
    },
    phosphorus: {
        type: String,
    },
    iron: {
        type: String,
    },
    potassium: {
        type: String,
    },
    copper: {
        type: String,
    },
    zinc: {
        type: String,
    },
    retinol: {
        type: String,
    },
    RE: {
        type: String,
    },
    RAE: {
        type: String,
    },
    thiamine: {
        type: String,
    },
    riboflavin: {
        type: String,
    },
    pyridoxine: {
        type: String,
    },
    niacin: {
        type: String,
    },
    vitaminC: {
        type: String,
    },
    ash: {
        type: String,
    },
}, {

})

export default mongoose.model('Aliment', AlimentSchema)