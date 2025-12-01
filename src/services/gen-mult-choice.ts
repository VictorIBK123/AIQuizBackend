import { GoogleGenAI } from "@google/genai";
import { User } from "../models/users.js";
import type { quizHistory } from "../types/quizHistory.js";

const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY || ''});

async function generateMultiChoice(email: string, history: string,  categories: string,difficulty: string,questionType: string) {
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
    contents: `Generate 5 total random questions of categories ${categories} with difficulty level ${difficulty} and type ${questionType} questions..`,
    config: {
      systemInstruction: `You have to give the json codes only, in the format
             [
        {
            'question': 'What does CSS stand for?',
            'options': ['Cascading Style Sheets', 'Cascading Simple Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
            'answer': 0,
            'difficultyLevel' : 'easy',
            'category': 'Machine Learning',
            'explanation': 'CSS stands for Cascading Style Sheets, which is used to style the appearance of web pages.'
        },
        {
            'question': 'Which language is used for web apps?',
            'options': ['PHP', 'Python', 'JavaScript', 'All of the above'],
            'answer': 3,
            'difficultyLevel' : 'easy',
            'category': 'Natural Language Processing',
            'explanation': 'All of these languages (PHP, Python, and JavaScript) are commonly used in web development.'
        }]
            'question' is the question you generated according to the category given,
            'options' is an array of four options including the answer if multichoice and just two options (True and False) if true&false,
            'answer' is the index of the array of options that is the correct answer, confirm your answer by reasoning first before giving the answer index,
            'difficultyLevel' : in the range of 1 to 100 the difficulty level can be 'easy'(range 1 to 45), 'normal'(range 45 to 80) or 'difficult'(range 81 to 100) depending on the prompt I gave you,
            'category' is the category of the particular question according to the categories I gave you,
            'explanation' is the explanation of the answer or how you got the answer, show workings and calculations where necessary,
            The difficulty of the questions will depend on the difficulty level I put in the prompt I gave,
            The number of questions for each category should be roughly equal to one another
            the total number of questions you generate must be equal to the number of questions you were asked to generate
            The questions you will generate must not include any of these questions ${usedHistoryQuestions} and must not in any way be related to them, the questions you will generate and the questions in the history must be completely different and unrelated.
            Don't ever use " in ordinary texts, only use it to indicate string data type in json.`,
    },
  });
  
  console.log('questions generated successfully')
  console.log(response.text)
  return(response.text);
}

export default generateMultiChoice