import { IAliment } from '../models/aliment/Aliment.model'
import alimentsRepository from '../repositories/aliments.repository'

class AlimentService {
    async findAll() {
        return await alimentsRepository.findAll('_id name kcal alimentGroup protein carb fat sodion')
    }

    async findById(id: string) {
        return await alimentsRepository.findById(id, '')
    }

}

export default new AlimentService()