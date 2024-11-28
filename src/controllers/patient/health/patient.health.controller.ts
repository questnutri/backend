import { NextFunction, Response } from 'express'
import { ObjectId } from 'mongoose'
import { ContextRequest } from '../../findContext.controller'
import ShouldNeverHappen from '../../../errors/ShouldNeverHappen.error'

class PatientHealthController {
    async createNewMedication(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Creating a new a medication')
            const medication = req.body
            req.patient.details!.healthState!.currentMedications!.push(medication)
            await req.patient.save()
            return res.status(201).json(req!.patient!.details!.healthState!.currentMedications)
        } catch (error) {
            next(error)
        }
    }

    async updateCurrentMedication(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Updating a medication')
            if (req.patient.details && req.patient.details.healthState && req.patient.details.healthState.currentMedications) {
                const index = req.patient.details.healthState.currentMedications.findIndex((value) => value._id == req.params.medicationId as unknown as ObjectId)
                const record = req.patient.details.healthState.currentMedications.at(index)
                req.patient.details.healthState.currentMedications.splice(index, 1)
                req.patient.details.healthState.currentMedications.push({
                    ...record,
                    ...req.body
                })
                await req.patient.save()
                return res.status(200).json(req.patient.details.healthState.currentMedications)
            }
            return res.status(400).json({ message: 'Bad request' })
        } catch (error) {
            next(error)
        }
    }

    async deleteCurrentMedication(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Deleting a medication')
            if (req.patient.details && req.patient.details.healthState && req.patient.details.healthState.currentMedications) {
                const index = req.patient.details.healthState.currentMedications.findIndex((value) => value._id == req.params.medicationId as unknown as ObjectId)
                const record = req.patient.details.healthState.currentMedications.at(index)
                req.patient.details.healthState.currentMedications.splice(index, 1)
                await req.patient.save()
                return res.status(200).json(req.patient.details.healthState.currentMedications)
            }
            return res.status(400).json({ message: 'Bad request' })
        } catch (error) {
            next(error)
        }
    }



    async createNewDisease(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Creating a new disease')
            const disease = req.body
            req.patient.details!.healthState!.chronicDiseases!.push(disease)
            await req.patient.save()
            return res.status(201).json(req!.patient!.details!.healthState!.chronicDiseases)
        } catch (error) {
            next(error)
        }
    }

    async updateDisease(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Updating a disease')
            if (req.patient.details && req.patient.details.healthState && req.patient.details.healthState.chronicDiseases) {
                const index = req.patient.details.healthState.chronicDiseases.findIndex((value) => value._id == req.params.diseaseId as unknown as ObjectId)
                const record = req.patient.details.healthState.chronicDiseases.at(index)
                req.patient.details.healthState.chronicDiseases.splice(index, 1)
                req.patient.details.healthState.chronicDiseases.push({
                    ...record,
                    ...req.body
                })
                await req.patient.save()
                return res.status(200).json(req.patient.details.healthState.chronicDiseases)
            }
            return res.status(400).json({ message: 'Bad request' })
        } catch (error) {
            next(error)
        }
    }

    async deleteDisease(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Deleting a disease')
            if (req.patient.details && req.patient.details.healthState && req.patient.details.healthState.chronicDiseases) {
                const index = req.patient.details.healthState.chronicDiseases.findIndex((value) => value._id == req.params.diseaseId as unknown as ObjectId)
                const record = req.patient.details.healthState.chronicDiseases.at(index)
                req.patient.details.healthState.chronicDiseases.splice(index, 1)
                await req.patient.save()
                return res.status(200).json(req.patient.details.healthState.chronicDiseases)
            }
            return res.status(400).json({ message: 'Bad request' })
        } catch (error) {
            next(error)
        }
    }

    

    async createNewAllergy(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Creating a new a allergy')
            const allergy = req.body
            req.patient.details!.healthState!.allergies!.push(allergy)
            await req.patient.save()
            return res.status(201).json(req!.patient!.details!.healthState!.allergies)
        } catch (error) {
            next(error)
        }
    }

    async updateAllergy(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Updating a allergy')
            if (req.patient.details && req.patient.details.healthState && req.patient.details.healthState.allergies) {
                const index = req.patient.details.healthState.allergies.findIndex((value) => value._id == req.params.allergyId as unknown as ObjectId)
                const record = req.patient.details.healthState.allergies.at(index)
                req.patient.details.healthState.allergies.splice(index, 1)
                req.patient.details.healthState.allergies.push({
                    ...record,
                    ...req.body
                })
                await req.patient.save()
                return res.status(200).json(req.patient.details.healthState.allergies)
            }
            return res.status(400).json({ message: 'Bad request' })
        } catch (error) {
            next(error)
        }
    }

    async deleteAllergy(req: ContextRequest, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if (!req.patient) throw new ShouldNeverHappen('Deleting a allergy')
            if (req.patient.details && req.patient.details.healthState && req.patient.details.healthState.allergies) {
                const index = req.patient.details.healthState.allergies.findIndex((value) => value._id == req.params.allergyId as unknown as ObjectId)
                const record = req.patient.details.healthState.allergies.at(index)
                req.patient.details.healthState.allergies.splice(index, 1)
                await req.patient.save()
                return res.status(200).json(req.patient.details.healthState.allergies)
            }
            return res.status(400).json({ message: 'Bad request' })
        } catch (error) {
            next(error)
        }
    }

}

export default new PatientHealthController()