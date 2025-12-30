import { type Response } from "express";
import type AuthenticatedRequest from "../types/authenticated.request.js";
import type { quizHistory } from "../types/quizHistory.js";
import SaveQuizHistory from "../services/history.quiz.save.service.js";
import theoryGradeService from "../services/grade-theory.service.js";
import { User } from "../models/users.js";
const gradeTheory = async(req: AuthenticatedRequest, res: Response)=>{
    const {answeredQuestions}:{answeredQuestions: quizHistory[]} = req.body;
    if (!req.user){
        return res.status(401).json({message: 'Unauthorized'});
    }
    try {
        console.log('saving quiz history before grading')
        const gradedResult = await theoryGradeService(answeredQuestions);
        console.log('graded result in controller', gradedResult)
        res.json({gradedResult});
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error' });
    }

}

export default gradeTheory;