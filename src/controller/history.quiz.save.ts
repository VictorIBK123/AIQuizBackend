import { User } from "../models/users.js"

const SaveQuizHistory = async (email: string, quizHistory: string )=>{
    await User.findOneAndUpdate({email}, {quizHistory})
}

export default SaveQuizHistory