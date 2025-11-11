import mongoose, { Model, Schema } from "mongoose";
import { type UserType } from "../types/users.js";

const userSchema: Schema = new mongoose.Schema<UserType>({
    email: {type: String, required: true, unique: true},
    refreshToken: {type: String, required: true},
    }
,{timestamps: true, minimize: true})

export const User: Model<UserType> = mongoose.model<UserType>("users", userSchema)