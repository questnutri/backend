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

export const PatientSchema = new Schema<IPatient>(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			default: ''
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String
		},
		details: {
			rg: {
				type: String,
				default: ''
			},
			cpf: {
				type: String,
				default: ''
				// validate: {
				// 	validator: function (cpf: string) {
				// 		return validateCPF(cpf)
				// 	},
				// 	message: 'Invalid CPF'
				// },
			},
			phone: {
				type: String,
				default: ''
			},
			birth: {
				type: Date,
			},
			height: {
				type: Number,
				default: 0,
			},
			gender: {
				type: String,
				enum: ['male', 'female', 'other'],
				default: 'other'
			},
			weights: {
				type: [WeightSchema],
				default: []
			},
			lastWeight: {
				type: Schema.Types.ObjectId || null,
				ref: 'Weight',
				default: null
			},
			routine: {
				type: String,
				default: ''
			},
			goals: {
				type: String,
				default: ''
			},
			foodPreferences: {
				type: String,
				default: ''
			},
			healthState: {
				diabetic: {
					type: Boolean,
					default: false
				},
				pregnancy: {
					type: {
						isPregnant: {
							type: Boolean,
							// validate: {
							// 	validator: function (isPregnant: boolean) {
							// 		if (isPregnant && this.details.gender !== 'female') {
							// 			return false
							// 		}
							// 		return true
							// 	},
							// 	message: 'Pregnant can only be true if gender is female'
							// }
						},
						dueDate: {
							type: Date,
							required: function () { return this.pregnant.isPregnant }
						},
						trimester: {
							type: Number,
							enum: [1, 2, 3],
							required: function () { return this.pregnant.isPregnant }
						},
						pregnancyType: {
							type: String,
							enum: ['single', 'multiple'],
							required: function () { return this.pregnant.isPregnant }
						},
						complications: {
							type: String,
						},
						obs: {
							type: String
						}
					}
				},
				allergies: {
					type: [AllergySchema],
					default: []
				},
				chronicDiseases: {
					type: [DiseaseSchema],
					default: []
				},
				currentMedications: {
					type: [MedicationSchema],
					default: []
				},
				obs: {
					type: String
				}
			},
			address: {
				type: AddressSchema,
			},
		},
		nutri: {
			type: Schema.Types.ObjectId,
			ref: 'Nutritionist',
			required: true
		},
		activeDiet: {
			type: Schema.Types.ObjectId || null,
			ref: 'Diet',
			default: null
		},
		diets: {
			type: [DietSchema],
			default: []
		},
		dailyMealRecord: {
			checkingDay: Number,
			completedToday: [String], // Mudando para um array de strings
		}
	},
	{
		timestamps: true
	}
)

PatientSchema.pre('save', async function (next) {
	if (this.isModified('registeredAt')) this.invalidate('registeredAt', 'Cannot modify registeredAt')
	if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 12)
	next()
})

export default mongoose.model('Patient', PatientSchema)