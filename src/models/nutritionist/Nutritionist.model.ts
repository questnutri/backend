import mongoose, { Document, ObjectId, Schema } from 'mongoose'
import * as bcrypt from 'bcrypt'
import validateCPF from '../../middlewares/validate/validateCPF'

export interface INutritionist extends Document {
	_id: mongoose.Types.ObjectId,
	firstName: string,
	lastName?: string
	email: string,
	password: string,
	patients: ObjectId[]
	details?: {
		rg?: string
		cpf?: string
		phone?: string
		birth?: Date,
		gender?: 'male' | 'female' | 'other',
		cnpj?: string,
		clinicName?: string,
		crn?: string,
		dateOfIssue?: Date
	}
}

export const NutritionistSchema = new Schema<INutritionist>({
	_id: { type: Schema.Types.ObjectId },
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		default: ''
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	patients: {
		type: [Schema.Types.ObjectId],
		ref: 'Patient',
		default: []
	},
	details: {
		rg: {
			type: String,
			default: ''
		},
		cpf: {
			type: String,
			default: ''
		},
		phone: {
			type: String,
			default: ''
		},
		birth: {
			type: Date,
		},
		gender: {
			type: String,
			enum: ['male', 'female', 'other'],
			default: 'other'
		},
		cnpj: {
			type: String,
			default: ''
		},
		clinicName: {
			type: String,
			default: ''
		},
		crn: {
			type: String,
			default: ''
		},
		dateOfIssue: {
			type: Date
		}
	}
}, {
	timestamps: true
})

NutritionistSchema.pre('save', async function (next) {
	if (this.isModified('registeredAt')) this.invalidate('registeredAt', 'Cannot modify registeredAt')
	if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 12)
	next()
})

export default mongoose.model('Nutritionist', NutritionistSchema)