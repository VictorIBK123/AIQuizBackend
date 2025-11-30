import 'dotenv/config';
import express, {} from 'express';
import { generateQuestionsRouter } from './routes/questionsgen.routes.js';
import connectDatabase from './config/config.mongodb.js';
import quizHistoryRouter from './routes/quizHistory.routes.js';
import tokenRouter from './routes/token.routes.js';
import appDataRouter from './routes/appdata.routes.js';
import { Categories } from './models/categories.js';
import getCategoriesRouter from './routes/categories.routes.js';
const app = express();
const PORT = 3001;
await connectDatabase();
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use('/api/gen', generateQuestionsRouter);
app.use('/api/token', tokenRouter);
app.use('/api/categories', getCategoriesRouter);
// app.use('/api', detailsQuizSaveRouter)
app.use('/api/quiz-history', quizHistoryRouter);
app.use('/api/appdata', appDataRouter);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map