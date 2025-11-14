import { Router } from "express";
const detailsQuizSaveRouter: Router = Router();
import SaveQuizHistory from "../controller/history.quiz.save.js";

detailsQuizSaveRouter.post('/quiz-history/save', async (req, res) => {
    const { token, quizHistory } = req.body;
    if (!token || !quizHistory) {
        return res.status(400).send({success: false, message: 'Token and quizHistory are required.'});
    }
    try {
        await SaveQuizHistory(token, quizHistory);
        res.status(200).send({success: true});
    } catch (error) {
       res.status(500).send({success: false, message: 'Internal server error.'}); 
    }
    
})

export default detailsQuizSaveRouter;