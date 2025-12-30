import { Router, type Response } from "express";
import validateToken from "../middleware/token.validate.js";
import gradeTheory from "../controllers/grade-theory.controller.js";
const gradeTheoryRouter = Router()
gradeTheoryRouter.post('/grade', validateToken, gradeTheory )

export default gradeTheoryRouter;