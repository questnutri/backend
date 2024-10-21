import { Document } from 'mongoose'

export interface SubFood extends Document {
    aliment: any
    quantity: number
    unit: string
    obs?: string
}