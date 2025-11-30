import { Categories } from "../models/categories.js"

const getCategories = async ()=>{
    console.log("Fetching categories from DB")
    const categories = (await Categories.find())[0]?.categories
    return categories
}
export default getCategories