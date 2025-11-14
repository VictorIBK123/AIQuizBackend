import { User } from "../models/users.js";
const SaveQuizHistory = async (token, quizHistory) => {
    await User.findOneAndUpdate({ token }, { quizHistory });
};
export default SaveQuizHistory;
//# sourceMappingURL=history.quiz.save.js.map