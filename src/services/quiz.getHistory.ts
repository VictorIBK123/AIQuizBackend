import { User } from "../models/users.js"

const getQuizHistory = async (email: string)=>{
    const existingUser = await User.findOne({email})
    console.log('history fetched successfully')
    return existingUser?.quizHistory
}

export default getQuizHistory