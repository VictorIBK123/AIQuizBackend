import express, { type Request, type Response } from 'express'
import generateMultChoiceRouter from './routes/gen-mult-choice.js'
import theoryGeneratorRouter from './routes/gen-theory.js'
import connectDatabase from './config/config.mongodb.js'
import registerTokenRouter from './routes/token.register.js'
import updateTokenRouter from './routes/update.token.js'
import detailsQuizSaveRouter from './routes/details.quiz.save.js'
import getQuizHistoryRouter from './routes/quiz.getHistory.js'
const app = express()
const PORT =  4000
await connectDatabase()
app.use(express.json())
app.use((err: Error, req: Request, res: Response, next: () => void) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.use('/api', registerTokenRouter)
app.use('/api', theoryGeneratorRouter)
app.use('/api', generateMultChoiceRouter)
app.use('/api', updateTokenRouter)
app.use('/api', detailsQuizSaveRouter)
app.use('/api',  getQuizHistoryRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})