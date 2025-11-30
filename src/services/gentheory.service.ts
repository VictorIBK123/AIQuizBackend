import { GoogleGenAI } from "@google/genai";
import { User } from "../models/users.js"
import type { quizHistory } from "../types/quizHistory.js";
const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY || ''});
const generateTheory = async(email: string, history: string, categories: string, difficulty: string  )=>{
    const user = await User.findOne({email})
      const quizHistory:quizHistory[]  = JSON.parse(user?.quizHistory||'[]')
      const flattenedCategories: string[] = JSON.parse(categories).flat()
      const relatedQuizHistory = quizHistory.filter((e: quizHistory)=>
        flattenedCategories.includes(e.category)
    )
      const totalHistory = relatedQuizHistory.concat(JSON.parse(history))
      const usedHistory = totalHistory.slice(-50); //restricted to the last 50 questions only
      const usedHistoryQuestions = JSON.stringify(usedHistory.map((e)=>e.question))
      console.log('used history length',(usedHistory.map((e)=>e.question)).length )
      console.log(usedHistory.map((e)=>e.question))
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: `Generate 5 total random questions of categories ${categories} with difficulty level ${difficulty} and type theory questions and calculation problems where necessary.`,
        config: {
          systemInstruction: `You have to give the json codes only, in the format
                 [
            {
                'question': 'What does CSS stand for?',
                'answer': 'CSS stands for Cascading Style Sheet,
                'difficultyLevel' : 'easy',
                'category': 'Machine Learning',
            },
            {
                'question': 'Which language is used for web apps?',
                'answer': 'The language used for web apps include PHP, Python, Javascript, JAVA, etc.',
                'difficultyLevel' : 'easy',
                'category': 'Natural Language Processing',
            }]
                'question' is the question you generated according to the category given,
                'answer' is the answer to the question, show workings and calculations where necessary,
                'difficultyLevel' : in the range of 1 to 100 the difficulty level can be 'easy'(range 1 to 45), 'normal'(range 45 to 80) or 'difficult'(range 81 to 100) depending on the prompt I gave you,
                'category' is the category of the particular question according to the categories I gave you,
                The difficulty of the questions will depend on the difficulty level I put in the prompt I gave,
                The number of questions for each category should be roughly equal to one another
                the total number of questions you generate must be equal to the number of questions you were asked to generate
                The questions you will generate must not include any of these questions ${usedHistoryQuestions} and must not in any way be related to them, the questions you will generate and the questions in the history must be completely different and unrelated`,
        },
      });
      
      console.log('questions generated successfully')
      return(response.text);
}
export default generateTheory