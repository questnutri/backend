import { Model } from 'mongoose'
import { Document } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { PaginatedResult } from '../interfaces/PaginatedResult.interface'

export interface QueryParams {
	items?: any
	skip?: any
	page?: any
}

export abstract class BaseRepository<T extends Document> {
	protected model: Model<T>

	constructor(model: Model<T>) {
		this.model = model
	}

	private parseNumber(value: any): number | undefined {
		const n = Number(value)
		return isNaN(n) ? undefined : n
	}

	async findAll(select = '', queryParams: QueryParams = {}): Promise<PaginatedResult<T>> {
		const limit = this.parseNumber(queryParams.items) ?? 20
		const skipParam = this.parseNumber(queryParams.skip)
		let page = this.parseNumber(queryParams.page) ?? 1
		if (page < 1) page = 1

		const totalItems = await this.model.countDocuments()
		const query = this.model.find().select(select)

		if (typeof skipParam === 'number') {
			query.skip(skipParam)
		} else {
			query.skip((page - 1) * limit)
		}

		query.limit(limit)

		const content = await query
		const totalPages = Math.ceil(totalItems / limit)

		return {
			content,
			totalItems,
			currentPage: page,
			pageSize: limit,
			totalPages,
			isFirstPage: page === 1,
			isLastPage: page >= totalPages
		}
	}

	async findAllWhere(filter: {}, select = '', queryParams: QueryParams = {}): Promise<PaginatedResult<T>> {
		const limit = this.parseNumber(queryParams.items) ?? 20
		const skipParam = this.parseNumber(queryParams.skip)
		let page = this.parseNumber(queryParams.page) ?? 1
		if (page < 1) page = 1

		const totalItems = await this.model.countDocuments(filter)
		const query = this.model.find(filter).select(select)

		if (typeof skipParam === 'number') {
			query.skip(skipParam)
		} else {
			query.skip((page - 1) * limit)
		}

		query.limit(limit)

		const content = await query
		const totalPages = Math.ceil(totalItems / limit)

		return {
			content,
			totalItems,
			currentPage: page,
			pageSize: limit,
			totalPages,
			isFirstPage: page === 1,
			isLastPage: page >= totalPages
		}
	}

	async findById(id: string, select = '', populate = '') {
		return await this.model.findById(id).select(select).populate(populate)
	}

	async findOneWhere(query: {}, select = '') {
		return await this.model.findOne(query).select(select)
	}

	async create(data: T, select = '') {
		const register = await this.model.create(data)
		return await this.model.findById(register._id).select(select)
	}

	async update(id: string, data: Partial<T>, select = '') {
		if ('password' in data && data.password) {
			data.password = await bcrypt.hash(data.password as string, 12)
		}
		return await this.model.findByIdAndUpdate(id, {
			...data,
		}, { new: true }).select(select)
	}

	async delete(id: string) {
		return await this.model.findByIdAndDelete(id)
	}
}
