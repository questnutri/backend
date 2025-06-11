import mongoose, { Document, ObjectId, Schema } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { Diet, DietSchema } from './diet/Diet.interface'
import { Weight, WeightSchema } from './weight/Weight.interface'
import validateCPF from '../../middlewares/validate/validateCPF'
import IAddress, { AddressSchema } from './address/Address.interface'
import { IMedication, MedicationSchema } from './health/Medication.interface'
import { DiseaseSchema, IDisease } from './health/Disease.interface'
import { AllergySchema, IAllergy } from './health/Allergy.interface'

export interface IPatient extends Document {
	_id: mongoose.Types.ObjectId,
	firstName: string
	lastName?: string
	email: string
	password: string
	details?: {
		rg?: string
		cpf?: string
		phone?: string
		birth?: Date
		height?: number
		gender?: 'male' | 'female' | 'other'
		weights?: Weight[]
		lastWeight?: ObjectId | null
		routine?: string
		goals?: string
		foodPreferences?: string
		healthState?: {
			diabetic?: boolean
			pregnancy?: {
				isPregnant: boolean
				dueDate?: Date
				trimester?: 1 | 2 | 3
				pregnancyType?: 'single' | 'multiple'
				complications?: string
				obs?: string
			}
			allergies?: IAllergy[]
			chronicDiseases?: IDisease[]
			currentMedications?: IMedication[]
			obs?: string
		},
		address?: IAddress,
	}
	nutri: ObjectId
	activeDiet?: ObjectId
	diets?: Diet[]
	dailyMealRecord?: {
		completedToday: string[],
		checkingDay: 0 | 1 | 2 | 3 | 4 | 5 | 6
	}
}

const DetailsSchema = new Schema(
	{
		rg: { type: String, default: '' },
		cpf: { type: String, default: '' },
		phone: { type: String, default: '' },
		birth: { type: Date },
		height: { type: Number, default: 0 },
		gender: { type: String, enum: ['male', 'female', 'other'], default: 'other' },
		weights: { type: [WeightSchema], default: [] },
		lastWeight: { type: Schema.Types.ObjectId, ref: 'Weight', default: null },
		routine: { type: String, default: '' },
		goals: { type: String, default: '' },
		foodPreferences: { type: String, default: '' },
		healthState: {
			diabetic: { type: Boolean, default: false },
			pregnancy: {
				isPregnant: { type: Boolean },
				dueDate: { type: Date },
				trimester: { type: Number, enum: [1, 2, 3] },
				pregnancyType: { type: String, enum: ['single', 'multiple'] },
				complications: { type: String },
				obs: { type: String },
			},
			allergies: { type: [AllergySchema], default: [] },
			chronicDiseases: { type: [DiseaseSchema], default: [] },
			currentMedications: { type: [MedicationSchema], default: [] },
			obs: { type: String },
		},
		address: { type: AddressSchema },
	},
	{ _id: false }
)

export const PatientSchema = new Schema<IPatient>(
	{
		_id: { type: Schema.Types.ObjectId },
		firstName: { type: String, required: true },
		lastName: { type: String, default: '' },
		email: { type: String, required: true, unique: true },
		password: { type: String },
		details: { type: DetailsSchema, required: false, default: undefined },
		nutri: { type: Schema.Types.ObjectId, ref: 'Nutritionist', required: true },
		activeDiet: { type: Schema.Types.ObjectId, ref: 'Diet', default: null },
		diets: { type: [DietSchema], default: [] },
		dailyMealRecord: {
			checkingDay: Number,
			completedToday: [String],
		}
	},
	{ timestamps: true }
)

PatientSchema.pre('save', async function (next) {
	if (this.isModified('registeredAt')) this.invalidate('registeredAt', 'Cannot modify registeredAt')
	if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 12)
	next()
})

export default mongoose.model('Patient', PatientSchema)
