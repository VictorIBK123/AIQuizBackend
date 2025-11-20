import express, {Router, type Response, type Request} from 'express'
import { GoogleGenAI } from "@google/genai";
import generateMultiChoice from '../controller/gen-mult-choice.js';
import validateToken from '../middleware/token.validate.js';
import type AuthenticatedRequest from '../types/authenticated.request.js';
const generateMultChoiceRouter = Router()
generateMultChoiceRouter.post('/gen_mult_choice', validateToken, async (req: AuthenticatedRequest, res: Response) => {
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


export default generateMultChoiceRouter