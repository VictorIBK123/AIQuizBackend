import { Router } from "express";
const detailsQuizSaveRouter = Router();
import SaveQuizHistory from "../controller/history.quiz.save.js";
import validateToken from "../middleware/token.validate.js";
detailsQuizSaveRouter.put('/quiz-history/save', validateToken, async (req, res) => {
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
export default detailsQuizSaveRouter;
//# sourceMappingURL=details.quiz.save.js.map