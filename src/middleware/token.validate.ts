import type { Request, Response } from "express";
import { User } from "../models/users.js";
import type { UserType } from "../types/users.js";
interface AuthenticatedRequest extends Request {
    user?: UserType
}
const validateToken = async (req: AuthenticatedRequest, res: Response, next: Function) =>{
    const token = req.headers.authorization
    const existingUser= await User.findOne({token})
    if(!existingUser){
        return res.status(401).json({message: "Invalid token"})
    }
    req.user = existingUser
    next();
}
export default validateToken;