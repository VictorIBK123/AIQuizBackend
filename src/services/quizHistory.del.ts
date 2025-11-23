import { User } from "../models/users.js"
import type { quizHistory } from "../types/quizHistory.js"

const delQuizHistory = async(email: string, quizId: number)=>{
    const user = await User.findOne({email})
    const userQuizHistory = JSON.parse(user?.quizHistory || "[]")
    const updatedQuizHistory = userQuizHistory.filter((quiz: quizHistory) => quiz.quizId !== quizId)
    if (user){
        user.quizHistory = JSON.stringify(updatedQuizHistory)
        await user?.save()
        return 
    }
    
}

export default delQuizHistory