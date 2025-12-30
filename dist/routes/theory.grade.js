import { Router } from "express";
import validateToken from "../middleware/token.validate.js";
import theoryGradeService from "../services/theory-grade.service.js";
import { User } from "../models/users.js";
import SaveQuizHistory from "../services/history.quiz.save.js";
const gradeTheoryRouter = Router();
gradeTheoryRouter.post('/grade', validateToken, async (req, res) => {
    const { answeredQuestions } = req.body;
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const historyToSave = answeredQuestions.map((item) => {
            return ({ ...item, chosen: -1, });
        });
        await SaveQuizHistory(req.user.email, JSON.stringify(historyToSave));
        const gradedResult = await theoryGradeService(answeredQuestions);
        res.json({ gradedResult });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
export default gradeTheoryRouter;
//# sourceMappingURL=theory.grade.js.map