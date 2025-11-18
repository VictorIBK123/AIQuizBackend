import { Router, type Response } from "express";
import validateToken from "../middleware/token.validate.js";
import type AuthenticatedRequest from "../types/authenticated.request.js";
import { User } from "../models/users.js";
import getQuizHistory from "../controller/quiz.getHistory.js";
const getQuizHistoryRouter = Router();

getQuizHistoryRouter.get('/quiz-history/get', validateToken, async(req: AuthenticatedRequest, res: Response)=>{
    const user = req.user
    if (!user){
        return res.status(401).json({message: "Unauthorized"})
    }
    try {
        const history= await getQuizHistory(user.email)
        res.status(200).json({quizHistory: history})
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

export default getQuizHistoryRouter;