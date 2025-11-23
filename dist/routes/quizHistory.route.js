import { Router } from "express";
import validateToken from "../middleware/token.validate.js";
import { User } from "../models/users.js";
import getQuizHistory from "../services/quiz.getHistory.js";
import SaveQuizHistory from "../services/history.quiz.save.js";
const quizHistoryRouter = Router();
quizHistoryRouter.get('/get', validateToken, async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const history = await getQuizHistory(user.email);
        res.status(200).json({ quizHistory: history });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
quizHistoryRouter.put('/save', validateToken, async (req, res) => {
    const user = req.user;
    const { questions } = req.body;
    if (!questions) {
        return res.status(400).send({ success: false, message: 'Token and quizHistory are required.' });
    }
    try {
        await SaveQuizHistory(user?.email || '', questions);
        res.status(200).send({ success: true });
    }
    catch (error) {
        res.status(500).send({ success: false, message: 'Internal server error.' });
    }
});
export default quizHistoryRouter;
//# sourceMappingURL=quizHistory.route.js.map