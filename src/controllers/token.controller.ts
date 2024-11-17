import { Request } from 'express'
import { decodeToken } from '../middlewares/auth/auth.middleware'
import { AdminTokenModel, NutritionistTokenModel, PatientTokenModel } from '../../tokens/tokens.model'
import Forbidden from '../errors/Forbidden.error'

export class TokenController {
    static async storeToken(payload: { id: string, role: string }, token: string) {
        switch (payload.role) {
            case 'patient':
                await PatientTokenModel.destroy({ where: { id: payload.id.toString() } })
                await PatientTokenModel.create({ id: payload.id.toString(), token })
                break
            case 'nutritionist':
                await NutritionistTokenModel.destroy({ where: { id: payload.id.toString() } })
                await NutritionistTokenModel.create({ id: payload.id.toString(), token })
                break
            case 'admin':
                await AdminTokenModel.destroy({ where: { id: payload.id.toString() } })
                await AdminTokenModel.create({ id: payload.id.toString(), token })
                break
        }
    }

    static async verifyStoredToken(decoded: { id: string, role: string }, token: string) {
        let storedTokenInstance;
        const { id, role } = decoded

        switch (role) {
            case 'admin':
                storedTokenInstance = await AdminTokenModel.findOne({ where: { id } })
                break
            case 'nutritionist':
                storedTokenInstance = await NutritionistTokenModel.findOne({ where: { id } })
                break
            case 'patient':
                storedTokenInstance = await PatientTokenModel.findOne({ where: { id } })
                break
            default:
                throw new Forbidden(`No token model found for role: ${role}`)
        }

        if (storedTokenInstance && ((storedTokenInstance.get('logout') === true) || (storedTokenInstance.get('token', { plain: true }) !== token))) {
            throw new Forbidden('Invalid token')
        }

    }

    static async logoutStoredToken(token: Request) {
        let storedTokenInstance
        const decoded =  await decodeToken(token)
        const { id, role } = decoded

        switch (role) {
            case 'admin':
                storedTokenInstance = await AdminTokenModel.findOne({ where: { id } })
                break
            case 'nutritionist':
                storedTokenInstance = await NutritionistTokenModel.findOne({ where: { id } })
                break
            case 'patient':
                storedTokenInstance = await PatientTokenModel.findOne({ where: { id } })
                break
            default:
                throw new Forbidden(`No token model found for role: ${role}`)
        }

        if (!storedTokenInstance) {
            throw new Forbidden('Invalid token')
        }

        storedTokenInstance.set('logout', true)
        await storedTokenInstance.save()

    }
}