import mongoose, { Model, Schema } from "mongoose";
import {} from "../types/users.js";
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true },
    overallPerformance: { type: Number, default: 0 },
    quizHistory: { type: String, default: '[]' }
}, { timestamps: true, minimize: true });
export const User = mongoose.model("users", userSchema);
//# sourceMappingURL=users.js.map