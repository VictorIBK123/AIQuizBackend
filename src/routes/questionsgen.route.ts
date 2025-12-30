import express, {Router, type Response, type Request} from 'express'
import { GoogleGenAI } from "@google/genai";
import generateMultiChoice from '../services/gen-mult-choice.service.js';
import validateToken from '../middleware/token.validate.js';
import type AuthenticatedRequest from '../types/authenticated.request.js';
import generateTheory from '../services/gentheory.service.js';

export const generateQuestionsRouter= Router()
generateQuestionsRouter.post('/gen_mult_choice', validateToken, async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user){
        return res.status(401).json({message: "Unauthorized"})
    }
    const email= req.user.email
    const history = req.body.history as string
    const categories = req.body.categories as string
    const difficulty = req.body.difficulty as string
    const questionType = req.body.questionType as string
    const result = await generateMultiChoice(email, history, categories, difficulty, questionType)
    res.send({output: result})
})

generateQuestionsRouter.post('/gen_theory', validateToken, async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user){
        return res.status(401).json({message: "Unauthorized"})
    }
    const email= req.user.email
    const history = req.body.history as string
    const categories = req.body.categories as string
    const difficulty = req.body.difficulty as string
    const result = await generateTheory(email, history, categories, difficulty)
    res.send({output: result})
})


