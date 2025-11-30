import mongoose, { Model } from "mongoose";
import type { categoriesType } from "../types/categories.js";

const categoriesSchema = new mongoose.Schema<categoriesType>(
    {
        categories: {type: Object, required: true} 
    }
);

export const Categories: Model<categoriesType> =  mongoose.model<categoriesType>('categories', categoriesSchema);