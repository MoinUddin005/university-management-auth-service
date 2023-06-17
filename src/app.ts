import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'

// import ApiError from './errors/ApiError'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/', routes)
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// app.get('/', async (req: Request, res: Response) => {
//     Promise.reject(new Error("Unhandled Promise Rejection"))
// })

app.use(globalErrorHandler)

export default app
