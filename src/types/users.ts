import { Document, Types } from "mongoose";
export interface UserType extends Document {
    refreshToken: string,
    email: string,
}