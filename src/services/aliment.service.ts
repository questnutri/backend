import { IAliment } from '../models/aliment/Aliment.model'
import alimentsRepository from '../repositories/aliments.repository'
import { QueryParams } from '../repositories/base.repository'

class AlimentService {
    async findAll(query: QueryParams = {}) {
        let filter = {}

        if ('name' in query || 'group' in query) {
            filter = {}
            if ('name' in query && typeof query.name === 'string') {
                filter = { ...filter, name: { $regex: query.name, $options: 'i' } }
            }
            if ('group' in query && typeof query.group === 'string') {
                filter = { ...filter, alimentGroup: { $regex: query.group, $options: 'i' } }
            }
            return await alimentsRepository.findAllWhere(filter, '_id name kcal alimentGroup protein carb fat sodion', query)
        } else {
            return await alimentsRepository.findAll('_id name kcal alimentGroup protein carb fat sodion', query)
        }
    }

    async findById(id: string) {
        return await alimentsRepository.findById(id, '')
    }
}

export default new AlimentService()
