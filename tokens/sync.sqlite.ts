import sequelize from "./sqlite.db"
import 'colors'

const syncTokenDatabase = async () => {
    try {
        await sequelize.sync({ force: true })
        console.log('Token table successfully synchronized'.green.bold)
    } catch (error) {
        console.log('Error synchronizing tables'.red)
        //console.error(error)
    }
}

export default syncTokenDatabase