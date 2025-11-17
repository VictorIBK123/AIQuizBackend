import { User } from "../models/users.js";
const SaveQuizHistory = async (email, quizHistory) => {
    await User.findOneAndUpdate({ email }, { quizHistory });
};
export default SaveQuizHistory;
//# sourceMappingURL=history.quiz.save.js.map