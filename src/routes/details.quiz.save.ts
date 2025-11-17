import { Router, type Request, type Response } from "express";
const detailsQuizSaveRouter: Router = Router();
import SaveQuizHistory from "../controller/history.quiz.save.js";
import validateToken from "../middleware/token.validate.js";
import type { UserType } from "../types/users.js";
import type AuthenticatedRequest  from "../types/authenticated.request.js";



detailsQuizSaveRouter.post('/quiz-history/save', validateToken,  async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user
    const {quizHistory } = req.body;
    if (!quizHistory) {
        return res.status(400).send({success: false, message: 'Token and quizHistory are required.'});
    }
    try {
        await SaveQuizHistory(user?.email||'', quizHistory);
        res.status(200).send({success: true});
    } catch (error) {
       res.status(500).send({success: false, message: 'Internal server error.'}); 
    }
})


export default detailsQuizSaveRouter;