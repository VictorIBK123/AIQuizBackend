import { Router } from "express";
import validateToken from "../middleware/token.validate.js";
import { User } from "../models/users.js";
import SaveQuizHistory from "../controller/history.quiz.save.js";
const submitRouter = Router();
submitRouter.post('/submit', validateToken, async (req, res) => {
    const user = req.user;
    const quizHistory = req.body.quizHistory;
    if (!quizHistory) {
        return res.status(400).send({ success: false, message: 'quizHistory is required.' });
    }
    await SaveQuizHistory(user?.email || '', quizHistory);
});
export default submitRouter;
//# sourceMappingURL=submit.js.map