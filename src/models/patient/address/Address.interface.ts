import { Schema } from "mongoose"

export default interface IAddress {
    street: string
    number: number
    complement: string
    cep: string
    hood: string
    city: string
    state: string
}

export const AddressSchema = new Schema<IAddress>({
    street: {
        type: String,
        required: true,
        default: ''
    },
    number: {
        type: Number,
        required: true,
        default: 0
    },
    complement: {
        type: String,
        default: ''
    },
    cep: {
        type: String,
        required: true,
        default: ''
    },
    hood: {
        type: String,
        required: true,
        default: ''
    },
    city: {
        type: String,
        required: true,
        default: ''
    },
    state: {
        type: String,
        required: true,
        default: 'SP'
    }
}, { timestamps: false, _id: false })