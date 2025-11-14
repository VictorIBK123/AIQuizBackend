import mongoose, { Model, Schema } from "mongoose";
import { type UserType } from "../types/users.js";

const userSchema: Schema = new mongoose.Schema<UserType>({
    email: {type: String, required: true, unique: true},
    token: {type: String, required: true},
    overallPerformance: {type: Number, default: 0},
    quizHistory: {type: String, default:''}
    }
,{timestamps: true, minimize: true})

export const User: Model<UserType> = mongoose.model<UserType>("users", userSchema)