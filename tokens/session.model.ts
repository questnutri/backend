import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from './sqlite.db';
import mongoose from 'mongoose';

export class SessionModel extends Model<InferAttributes<SessionModel>, InferCreationAttributes<SessionModel>> {
    declare sessionId: CreationOptional<string>;
    declare userId: string;
    declare createdAt: CreationOptional<Date>;
    declare expiresAt: Date;
}

SessionModel.init({
    sessionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'sessions',
    timestamps: false
});