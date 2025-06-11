import { IPatient } from '../models/patient/Patient.model'
import patientRepository from '../repositories/patient.repository'

export interface PatientQuery {
	firstName?: string
	email?: string
	rg?: string
	cpf?: string
	phone?: string
}

class PatientService {
	async findAll() {
		return await patientRepository.findAll('-password')
	}

	async findAllFromNutritionist(nutritionistId: string, query?: PatientQuery) {
		const filter: any = { nutri: nutritionistId }

		if (query) {
			if (query.firstName) filter.firstName = query.firstName
			if (query.email) filter.email = query.email
			if (query.rg) filter['details.rg'] = query.rg
			if (query.cpf) filter['details.cpf'] = query.cpf
			if (query.phone) filter['details.phone'] = query.phone
		}

		return await patientRepository.findAllWhere(
			filter,
			'_id firstName lastName email details.cpf details.phone details.birth createdAt updatedAt'
		)
	}

	async findById(id: string) {
		return await patientRepository.findById(id, '-password')
	}

	async findByEmail(email: string) {
		return await patientRepository.findOneWhere({ email })
	}

	async create(data: Partial<IPatient>) {
		return await patientRepository.create(data as IPatient, '-password')
	}

	async update(id: string, data: Partial<IPatient>) {
		return await patientRepository.update(id, data, '-password')
	}

	async delete(id: string) {
		return await patientRepository.delete(id)
	}

	async findByQuery(query: PatientQuery) {
		const filter: any = {}

		if (query.firstName) filter.firstName = query.firstName
		if (query.email) filter.email = query.email

		if (query.rg) filter['details.rg'] = query.rg
		if (query.cpf) filter['details.cpf'] = query.cpf
		if (query.phone) filter['details.phone'] = query.phone

		return await patientRepository.findAllWhere(filter, '-password')
	}
}

export default new PatientService()
