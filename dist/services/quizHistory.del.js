import { User } from "../models/users.js";
const delQuizHistory = async (email, quizId) => {
    const user = await User.findOne({ email });
    const userQuizHistory = JSON.parse(user?.quizHistory || "[]");
    const updatedQuizHistory = userQuizHistory.filter((quiz) => quiz.quizId !== quizId);
    if (user) {
        user.quizHistory = JSON.stringify(updatedQuizHistory);
        await user?.save();
        return;
    }
};
export default delQuizHistory;
//# sourceMappingURL=quizHistory.del.js.map