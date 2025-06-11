import { NextFunction, Request, Response } from 'express'
import alimentService from '../services/aliment.service'
import NotFound from '../errors/NotFound.error'

class AlimentController {

    async getAlimentById(req: Request, res: Response, next: NextFunction): Promise<void | any> {
        try {
            const aliment = await alimentService.findById(req.params.alimentId as string)
            if (!aliment) throw new NotFound('Aliment not found')
            return res.status(200).json(aliment)
        } catch (error) {
            next(error)
        }
    }

    async getAllAliments(req: Request, res: Response, next: NextFunction): Promise<void | any> {
        try {
            const query: any = {
                page: req.query.page || '0',
                items: req.query.items || '20',
            };

            if (req.query.name) {
                query.name = req.query.name;
            }

            if (req.query.group) {
                query.group = req.query.group;
            }

            const aliments = await alimentService.findAll(query);
            return res.status(200).json(aliments);
        } catch (error) {
            next(error);
        }
    }

}

export default new AlimentController()