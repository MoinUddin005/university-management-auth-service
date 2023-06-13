import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.routes'

// import ApiError from './errors/ApiError'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users/', UserRoutes)

// app.get('/', async (req: Request, res: Response) => {
//     Promise.reject(new Error("Unhandled Promise Rejection"))
// })

app.use(globalErrorHandler)

export default app
