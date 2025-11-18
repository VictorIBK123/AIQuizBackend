import { User } from "../models/users.js";
const SaveQuizHistory = async (email, questions) => {
    const user = await User.findOne({ email });
    const quizHistory = user?.quizHistory;
    if (questions && user) {
        const parsedQuestions = JSON.parse(questions);
        const parsedQuizHistory = JSON.parse(quizHistory || '[]');
        let updatedQuizHistory = JSON.stringify(parsedQuizHistory.concat(parsedQuestions));
        user.quizHistory = updatedQuizHistory;
        await user.save();
    }
};
export default SaveQuizHistory;
//# sourceMappingURL=history.quiz.save.js.map