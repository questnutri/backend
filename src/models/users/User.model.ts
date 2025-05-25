import mongoose, { Document, mongo, Schema } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { SystemRoles } from '../../enums/SystemRoles.enum'

export interface IUser extends Document {
    email: string,
    password: string,
    role: SystemRoles
}

export const UserSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: Object.values(SystemRoles)
    }
}, {
    timestamps: true
})

UserSchema.pre<IUser>('save', async function (next) {
    if (this.isModified('registeredAt')) this.invalidate('registeredAt', 'Cannot modify registeredAt')
    if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 12)
    next()
})

export default mongoose.model('User', UserSchema)
