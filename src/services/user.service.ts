import { IUser } from "../models/users/User.model"
import userRepository from "../repositories/user.repository"

class UserService {
    async findAll() {
        return await userRepository.findAll('-password')
    }
    async findById(id: string) {
        return await userRepository.findById(id, '-password')
    }
    async findByEmail(email: string) {
        return await userRepository.findOneWhere({ email })
    }
    async create(data: Partial<IUser>) {
        return await userRepository.create(data as IUser, '-password')
    }
    async update(id: string, data: Partial<IUser>) {
        return await userRepository.update(id, data, '-password')
    }
    async delete(id: string) {
        return await userRepository.delete(id)
    }
}

export default new UserService()