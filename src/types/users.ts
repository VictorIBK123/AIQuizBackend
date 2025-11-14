import { Document, Types } from "mongoose";
export interface UserType extends Document {
    token: string,
    email: string,
    overallPerformance?: number,
    quizHistory?: string,
}