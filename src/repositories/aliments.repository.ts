import AlimentModel, { IAliment } from '../models/aliment/Aliment.model'
import { BaseRepository } from './base.repository'

class AlimentsRepository extends BaseRepository<IAliment> {
    constructor() {
        super(AlimentModel)
    }
}
export default new AlimentsRepository()