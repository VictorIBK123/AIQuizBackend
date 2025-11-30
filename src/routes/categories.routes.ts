import express, {type Response} from 'express'
import validateToken from '../middleware/token.validate.js';
import type AuthenticatedRequest from '../types/authenticated.request.js';
import getCategories from '../services/categories.service.js';
const getCategoriesRouter = express.Router();
getCategoriesRouter.get('/', validateToken, async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const result = await getCategories();
        res.status(200).json({ categories: result || [] });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

export default getCategoriesRouter