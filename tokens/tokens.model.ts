import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from './sqlite.db'

export interface TokenAttributes {
    id: string
    token: string
}

const createModel = (modelName: string) => {
    return sequelize.define(modelName, 
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            token: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: modelName.toLowerCase() + 's',
        }
        
    )
}

export const PatientTokenModel = createModel('Patient')
export const NutritionistTokenModel = createModel('Nutritionist')
export const AdminTokenModel = createModel('Admin')