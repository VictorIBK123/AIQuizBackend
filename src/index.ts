import 'dotenv/config'
import express, { type Request, type Response } from 'express'
import { generateQuestionsRouter} from './routes/questionsgen.route.js'
import connectDatabase from './config/config.mongodb.js'
import quizHistoryRouter from './routes/quizHistory.route.js'
import tokenRouter from './routes/token.route.js'
import appDataRouter from './routes/appdata.route.js'
import { Categories } from './models/categories.js'
import getCategoriesRouter from './routes/categories.route.js'
import gradeTheoryRouter from './routes/grade-theory.route.js'
const app = express()
const PORT =  3001
await connectDatabase()
app.use(express.json())
app.use((err: Error, req: Request, res: Response, next: () => void) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use('/api/gen', generateQuestionsRouter)
app.use('/api/token', tokenRouter)
app.use('/api/categories', getCategoriesRouter)
// app.use('/api', detailsQuizSaveRouter)
app.use('/api/quiz-history',  quizHistoryRouter)
app.use('/api/appdata',  appDataRouter)
app.use('/theory', gradeTheoryRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})