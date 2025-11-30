import mongoose, { Model } from "mongoose";
const categoriesSchema = new mongoose.Schema({
    categories: { type: Object, required: true }
});
export const Categories = mongoose.model('categories', categoriesSchema);
//# sourceMappingURL=categories.js.map