import { GoogleGenAI } from "@google/genai";
import { User } from "../models/users.js";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
const theoryGradeService = async (answeredQuestions) => {
    const input = answeredQuestions.map((item) => {
        return ({ question: item.question, modelAnswer: item.answer, userAnswer: item.chosen });
    });
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: `${JSON.stringify(input)}`,
        config: {
            systemInstruction: `You are an expert examiner. I will give you: 
        1. The questions 
        2. The model-generated answers
        3. The answers provided by the user
        in the form [{question: '',modelAnswer: '', userAnswer: ''}]

        Your job:
        1. Compare the model-generated answer with the correct answer.
        2. Grade the answer on a scale  of 0 to 100.
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
        8. Output in strict JSON using the format: 
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
    console.log('theory graded successfully');
    console.log(response.text);
    return (response.text);
};
export default theoryGradeService;
//# sourceMappingURL=theory-grade.service.js.map