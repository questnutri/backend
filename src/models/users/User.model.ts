import mongoose, { Document, mongo, Schema } from 'mongoose'
import * as bcrypt from 'bcrypt'

export interface IUser extends Document {
    email: string,
    password: string,
    role: "admin" | "patient" | "nutritionist"
}

export const UserSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["admin", "patient", "nutritionist",]
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
