import mongoose, { Model, Schema } from "mongoose";
import {} from "../types/users.js";
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: true },
}, { timestamps: true, minimize: true });
export const User = mongoose.model("users", userSchema);
//# sourceMappingURL=users.js.map