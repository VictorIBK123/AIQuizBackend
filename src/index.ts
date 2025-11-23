import express, { type Request, type Response } from 'express'
import generateMultChoiceRouter from './routes/gen-mult-choice.js'
import theoryGeneratorRouter from './routes/gen-theory.js'
import connectDatabase from './config/config.mongodb.js'
import quizHistoryRouter from './routes/quizHistory.routes.js'
import tokenRouter from './routes/token.routes.js'
import appDataRouter from './routes/appdata.routes.js'
const app = express()
const PORT =  3001
await connectDatabase()
app.use(express.json())
app.use((err: Error, req: Request, res: Response, next: () => void) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.use('/api', theoryGeneratorRouter)
app.use('/api', generateMultChoiceRouter)
app.use('/api/token', tokenRouter)
// app.use('/api', detailsQuizSaveRouter)
app.use('/api/quiz-history',  quizHistoryRouter)
app.use('/api/appdata',  appDataRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})