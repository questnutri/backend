import { Sequelize } from 'sequelize'
import 'colors'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './tokens/token.sqlite',
    logging: false
})

sequelize.authenticate()
    .then(() => console.log('SQLite connection stablished'.yellow))
    .catch((error) => {
        console.log('Could not connect to SQLite'.red)
        //console.error(error)
    })

export default sequelize