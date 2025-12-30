import {} from "express";
import SaveQuizHistory from "../services/history.quiz.save.service.js";
import theoryGradeService from "../services/grade-theory.service.js";
import { User } from "../models/users.js";
const gradeTheory = async (req, res) => {
    const { answeredQuestions } = req.body;
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        console.log('saving quiz history before grading');
        const gradedResult = await theoryGradeService(answeredQuestions);
        console.log('graded result in controller', gradedResult);
        res.json({ gradedResult });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
export default gradeTheory;
//# sourceMappingURL=grade-theory.controller.js.map