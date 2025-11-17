import { User } from "../models/users.js";
const SaveQuizHistory = async (email, questions) => {
    const user = await User.findOne({ email });
    const quizHistory = user?.quizHistory;
    if (questions && user) {
        let updatedQuizHistory = quizHistory?.concat(questions);
        user.quizHistory = updatedQuizHistory;
        await user.save();
    }
};
export default SaveQuizHistory;
//# sourceMappingURL=history.quiz.save.js.map