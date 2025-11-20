import express, { Router } from 'express';
import { GoogleGenAI } from "@google/genai";
import generateMultiChoice from '../controller/gen-mult-choice.js';
import validateToken from '../middleware/token.validate.js';
const generateMultChoiceRouter = Router();
generateMultChoiceRouter.post('/gen_mult_choice', validateToken, async (req, res) => {
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
export default generateMultChoiceRouter;
//# sourceMappingURL=gen-mult-choice.js.map