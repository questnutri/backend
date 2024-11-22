import { ObjectId } from 'mongoose'
import { ContextRequest } from '../../findContext.controller'
import { NextFunction, Response } from 'express'
import ShouldNeverHappen from '../../../errors/ShouldNeverHappen.error'
import NotFound from '../../../errors/NotFound.error'

class WeightController {
    async getAllWeights(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen(`Finding a patient's weight`)
            return res.status(200).json(req.patient!.details!.weights)
        } catch (error) {
            next(error)
        }
    }

    async getWeightById(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen(`Finding a patient's weight`)
            const weight = req.patient!.details!.weights!.find(weight => weight._id == req.params.weightId)
            if (!weight) throw new NotFound('Weight not found')
            return res.status(200).json(weight)
        } catch (error) {
            next(error)
        }
    }

    async createWeight(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Creating a new weight to a patient')
            req.patient.details!.weights?.push(req.body)
            req.patient.details!.lastWeight = req.patient.details!.weights!.at(-1)!._id as ObjectId
            await req.patient.save()
            return res.status(201).json(req.patient.details!.weights!.at(-1))
        } catch (error) {
            next(error)
        }
    }

    async updateWeightById(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen(`Updating a patient's weight`)
            const weightIndex = req.patient!.details!.weights!.findIndex(weight => weight._id == req.params.weightId)
            if (weightIndex !== -1) throw new NotFound('Weight not found')
            req.patient!.details!.weights![weightIndex] = req.body
            await req.patient.save()
            req.params.weightId = `${req.patient.details!.weights![weightIndex]}`
            next()
        } catch (error) {
            next(error)
        }
    }

    async deleteWeightById(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen(`Deleting a patient's weight`)

            const weightIndex = req.patient!.details!.weights!.findIndex(weight => weight._id == req.params.weightId)
            if (weightIndex === -1) throw new NotFound('Weight not found')
            const weightIdToRemove = req.patient!.details!.weights![weightIndex]._id
            req.patient!.details!.weights!.splice(weightIndex, 1)

            if (req.patient.details?.lastWeight && req.patient.details.lastWeight.toString() === weightIdToRemove!.toString()) {
                req!.patient!.details!.lastWeight = req.patient.details.weights!.length > 0 ? req.patient.details.weights!.at(-1)!._id as ObjectId : null
            }


            await req.patient.save()

            return res.status(200).json({ message: 'Weight deleted successfully' })
        } catch (error) {
            next(error)
        }
    }
}

export default new WeightController()