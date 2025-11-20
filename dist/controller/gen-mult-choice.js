import { GoogleGenAI } from "@google/genai";
import { User } from "../models/users.js";
const ai = new GoogleGenAI({ apiKey: 'AIzaSyBv-3WH7SroVCxuJdwckBSHPF8tA95O6Wc' });
async function generateMultiChoice(email, history, categories, difficulty, questionType) {
    const user = await User.findOne({ email });
    const quizHistory = JSON.parse(user?.quizHistory || '[]');
    const flattenedCategories = JSON.parse(categories).flat();
    const relatedQuizHistory = quizHistory.map((e) => {
        if (flattenedCategories.includes(e.category)) {
            return e;
        }
    });
    const totalHistory = relatedQuizHistory.concat(JSON.parse(categories));
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
            'explanation' is just a brief explanation of the answer or how you got the answer,
            The difficulty of the questions will depend on the difficulty level I put in the prompt I gave,
            Make sure your questions are random and must not include the previous ones you generated even in previous chats,
            The number of questions for each category should be roughly equal to one another
            the total number of questions you generate must be equal to the number of questions you were asked to generate
            The questions must not include any of these previous questions ${totalHistory}, The questions must not include any of these previous questions ${totalHistory}, I lay very much emphasis on this`,
        },
    });
    return (response.text);
}
export default generateMultiChoice;
//# sourceMappingURL=gen-mult-choice.js.map