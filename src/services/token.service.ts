import { SessionModel } from "../../tokens/session.model";
import { SystemRoles } from "../enums/SystemRoles.enum";
import ServerError from "../errors/ServerError.error";
import { IUser } from "../models/users/User.model";
import jwt from 'jsonwebtoken'
import BadRequest from "../errors/BadRequest.error";

class TokenService {
    public decode(token: string) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
            return decoded
        } catch (error) {
            throw new BadRequest(`Invalid token`)
        }
    }

    public async createSession(user: IUser) {
        const session = await SessionModel.create({
            userId: user.id,
            expiresAt: this.getRoleExpirationDate(user.role)
        });
        if (!session) {
            throw new ServerError(`Error while trying to create new session for ${user.role} user with id: ${user.id}`);
        }
        const payload = { id: user.id, role: user.role, sessionId: session.sessionId, authorized: [] };
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
        return token;
    }

    private getRoleExpirationDate(role: SystemRoles): Date {
        const now = new Date();
        const expiresAt = new Date(now);

        switch (role) {
            case SystemRoles.NUTRITIONIST:
                expiresAt.setDate(now.getDate() + 7);
                break;
            case SystemRoles.PATIENT:
                expiresAt.setMonth(now.getMonth() + 1);
                break;
            default:
                expiresAt.setHours(now.getHours() + 1);
        }

        return expiresAt;
    }
}

export default new TokenService();