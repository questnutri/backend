import express from 'express'
import routes from './routes'
import cors from 'cors'
import notFoundHandler from './middlewares/error/notFoundHandler.middleware'
import errorHandler from './middlewares/error/errorHandler.middleware'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/', routes)
app.use(notFoundHandler)
app.use(errorHandler)

export default app