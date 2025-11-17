import { User } from "../models/users.js"

const SaveQuizHistory = async (email: string, questions: string )=>{
    const user = await User.findOne({email})
    const quizHistory = user?.quizHistory
    if (questions && user){
        let updatedQuizHistory = quizHistory?.concat(questions)
        user.quizHistory = updatedQuizHistory as string
        await user.save()
    }
}

export default SaveQuizHistory