import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: 'AIzaSyBv-3WH7SroVCxuJdwckBSHPF8tA95O6Wc' });
const GenerateTheory = async (categories, difficulty) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: `Generate 5 total random questions of categories ${categories} with difficulty level ${difficulty} and type theory questions`,
        config: {
            systemInstruction: `You have to give the json codes only, in the format
             [
        {
            'question': 'What does CSS stand for?',
            'difficultyLevel' : 'easy',
            'category': 'Machine Learning',
        },
        {
            'question': 'State three uses of operating systems?',
            'difficultyLevel' : 'easy',
            'category': 'Natural Language Processing',
        }]
            'question' is the question you generated according to the category given,
            'difficultyLevel' : in the range of 1 to 100 the difficulty level can be 'easy'(range 1 to 45), 'normal'(range 45 to 80) or 'difficult'(range 81 to 100) depending on the prompt I gave you,
            'category' is the category of the particular question according to the categories I gave you,
            The difficulty of the questions will depend on the difficulty level I put in the prompt I gave,
            Make sure your questions are random and must not include the previous ones you generated even in previous chats,
            The number of questions for each category should be roughly equal to one another
            the total number of questions you generate must be equal to the number of questions you were asked to generate
            `,
        },
    });
    return (response.text);
};
export default GenerateTheory;
//# sourceMappingURL=gen-theory.js.map