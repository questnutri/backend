import { BaseRepository } from './base.repository'
import UserModel, { IUser } from '../models/users/User.model'

class UserRepository extends BaseRepository<IUser>{
    constructor(){
        super(UserModel)
    }
}
export default new UserRepository()