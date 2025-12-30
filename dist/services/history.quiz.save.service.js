import { User } from "../models/users.js";
const SaveQuizHistory = async (email, questions) => {
    const user = await User.findOne({ email });
    const quizHistory = user?.quizHistory;
    if (questions && user) {
        const parsedQuestions = JSON.parse(questions);
        const quizHistory2 = quizHistory || [];
        let updatedQuizHistory = JSON.stringify(quizHistory2.concat(parsedQuestions));
        user.quizHistory = quizHistory2.concat(parsedQuestions);
        await user.save();
        console.log('quiz history saved successfully');
    }
};
export default SaveQuizHistory;
//# sourceMappingURL=history.quiz.save.service.js.map