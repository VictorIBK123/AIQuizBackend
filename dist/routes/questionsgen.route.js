import express, { Router } from 'express';
import { GoogleGenAI } from "@google/genai";
import generateMultiChoice from '../services/gen-mult-choice.service.js';
import validateToken from '../middleware/token.validate.js';
import generateTheory from '../services/gentheory.service.js';
export const generateQuestionsRouter = Router();
generateQuestionsRouter.post('/gen_mult_choice', validateToken, async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const email = req.user.email;
    const history = req.body.history;
    const categories = req.body.categories;
    const difficulty = req.body.difficulty;
    const questionType = req.body.questionType;
    const result = await generateMultiChoice(email, history, categories, difficulty, questionType);
    res.send({ output: result });
});
generateQuestionsRouter.post('/gen_theory', validateToken, async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const email = req.user.email;
    const history = req.body.history;
    const categories = req.body.categories;
    const difficulty = req.body.difficulty;
    const result = await generateTheory(email, history, categories, difficulty);
    res.send({ output: result });
});
//# sourceMappingURL=questionsgen.route.js.map