import { Router } from "express";
import GenerateTheory from "../services/gen-theory.js";

const theoryGeneratorRouter = Router();
theoryGeneratorRouter.post("/generate-theory", async (req, res) => {
    const categories = req.body.categories as string;
    const difficulty = req.body.difficulty as string;
    const result = await GenerateTheory(categories, difficulty);
    res.send({ output: result });
})

export default theoryGeneratorRouter;
