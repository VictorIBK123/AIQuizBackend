import { User } from "../models/users.js"

const SaveQuizHistory = async (token: string, quizHistory: string )=>{
    await User.findOneAndUpdate({token}, {quizHistory})
}

export default SaveQuizHistory