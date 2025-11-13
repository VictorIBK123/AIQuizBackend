import express, { Router } from 'express';
import { GoogleGenAI } from "@google/genai";
import generateMultiChoice from '../controller/gen-mult-choice.js';
const generateMultChoiceRouter = Router();
generateMultChoiceRouter.post('/gen_mult_choice', async (req, res) => {
    const history = req.body.history;
    const categories = req.body.categories;
    const difficulty = req.body.difficulty;
    const questionType = req.body.questionType;
    const result = await generateMultiChoice(history, categories, difficulty, questionType);
    res.send({ output: result });
});
export default generateMultChoiceRouter;
//# sourceMappingURL=gen-mult-choice.js.map