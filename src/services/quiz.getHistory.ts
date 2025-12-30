import { User } from "../models/users.js"

const getQuizHistory = async (email: string)=>{
    const existingUser = await User.findOne({email})
    console.log('history fetched successfully', existingUser?.quizHistory)
    return JSON.stringify(existingUser?.quizHistory)
}

export default getQuizHistory