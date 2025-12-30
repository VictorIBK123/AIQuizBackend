import { GoogleGenAI } from "@google/genai";
import {User } from "../models/users.js";
import type { quizHistory } from "../types/quizHistory.js";
import removeMarkdown from 'remove-markdown';

const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY || ''});
const theoryGradeService = async(answeredQuestions: quizHistory[])=>{
    console.log('answeredQuestions received for grading:', answeredQuestions)
    const input = answeredQuestions.map((item: quizHistory)=>{
        return (
            {question: item.question, modelAnswer: item.answer, userAnswer: item.chosen}
        )
    })
    try {
        const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${JSON.stringify(input)}`,
        config: {
            systemInstruction: `You are an expert examiner. I will give you: 
            1. The questions 
            2. The model-generated answers
            3. The answers provided by the user
            in the form [{question: '',modelAnswer: '', userAnswer: ''}]

            Your job:
            1. Compare the model-generated answer with the correct answer.
            2. Grade the answer on a scale  of 0 to 1.
            3. Provide a short, direct explanation of the score.
            4. If the user's answer is partially correct, assign partial credit.
            5. Be strict but fair - no sugar-coating.
            6. For calculations:
                a) Check formulas, steps, and final answers.
                b) Award partial credit for correct steps even if the final answer is wrong.
                c) Penalize conceptual errors heavily.
            7. For theory:
                a) Compare meaning, not just keywords.
                b) Allow variations in wording if the core idea is correct.
            8. If user answer  is -1, that means the user did not answer the question which gives 0 score and isCorrect false
            9. Output in strict JSON using the format: 
                    [{
                        "score": 0,
                        "feedback": "string explaining the score",
                        "isCorrect": false
                    },
                    {
                        "score": 80,
                        "feedback": "string explaining the score",
                        "isCorrect": true
                    },
                ]
            `,
        },
        });
        console.log('theory graded successfully')
        console.log('Raw Response:', response.text);
        const cleanedResponse = removeMarkdown(response.text as string)
        console.log('cleanedResponse:', JSON.parse(cleanedResponse))
        return(JSON.parse(cleanedResponse));
    } catch (error) {
        console.error('Error grading theory answers:', error);
        return Promise.reject('Error grading theory answers: ' + error);

    }
    
    
    
}

export default theoryGradeService;