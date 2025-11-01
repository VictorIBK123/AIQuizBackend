import express, {Router, type Response, type Request} from 'express'
import { GoogleGenAI } from "@google/genai";
import generateMultiChoice from '../controller/gen-mult-choice.js';
const generateMultChoiceRouter = Router()
generateMultChoiceRouter.post('/gen_mult_choice', async (req: Request, res: Response) => {
    const categories = req.body.categories as string
    const difficulty = req.body.difficulty as string
    const questionType = req.body.questionType as string
    const result = await generateMultiChoice(categories, difficulty, questionType)
    res.send({output: result})
})

export default generateMultChoiceRouter