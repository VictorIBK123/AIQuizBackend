import mongoose, { Model, Schema } from "mongoose";
import { type UserType } from "../types/users.js";

const userSchema: Schema = new mongoose.Schema<UserType>({
    email: {type: String, required: true, unique: true},
    token: {type: String, required: true},
    overallPerformance: {type: Number, default: 0},
    quizHistory: {type: Array, default: []},
    appData: {type: {overallPerformance: Number, 
        background: String, 
        myColor: String, 
        allTotalQuestions: Number, 
        allQuestionType: String, 
        allDifficultyLevel: String, 
        allDurationMin: Number, 
        allDurationHr: Number, 
        quizId: Number, 
        answerValidation: String}, default:{overallPerformance: 0, 
        background:'white' , 
        myColor: '#1c1c45', 
        allTotalQuestions: 20, 
        allQuestionType: 'multichoice', 
        allDifficultyLevel: 'normal', 
        allDurationMin: 10, 
        allDurationHr: 0, 
        quizId: 0, 
        answerValidation: 'each'}
    }
    }
,{timestamps: true, minimize: true})

export const User: Model<UserType> = mongoose.model<UserType>("users", userSchema)