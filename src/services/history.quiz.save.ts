import { User } from "../models/users.js"

const SaveQuizHistory = async (email: string, questions: string )=>{
    const user = await User.findOne({email})
    const quizHistory = user?.quizHistory
    if (questions && user){
        const parsedQuestions: any[] = JSON.parse(questions)
        const parsedQuizHistory: any[] = JSON.parse(quizHistory || '[]')
        let updatedQuizHistory = JSON.stringify(parsedQuizHistory.concat(parsedQuestions))
        user.quizHistory = updatedQuizHistory as string
        await user.save()
        console.log('quiz history saved successfully')
    }
}

export default SaveQuizHistory