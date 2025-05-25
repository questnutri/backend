import { Request } from "express";
import Unauthorized from "../errors/Unauthorized.error";
import tokenService from "./token.service";
import { SessionModel } from "../../tokens/session.model";

export class AuthService {
    public async validateSession(req: Request) {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) throw new Unauthorized(`Token not provided`);
        try {
            const decoded = tokenService.decode(token);
            const session = await SessionModel.findByPk(decoded.sessionId);
            console.log(session);

        } catch (error) {
            
        }

    }
}

export default new AuthService();