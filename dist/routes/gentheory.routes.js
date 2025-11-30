import { Router } from "express";
import GenerateTheory from "../services/gen-theory.js";
const theoryGeneratorRouter = Router();
theoryGeneratorRouter.post("/generate-theory", async (req, res) => {
    const categories = req.body.categories;
    const difficulty = req.body.difficulty;
    const result = await GenerateTheory(categories, difficulty);
    res.send({ output: result });
});
export default theoryGeneratorRouter;
//# sourceMappingURL=gentheory.routes.js.map