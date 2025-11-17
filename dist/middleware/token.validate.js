import { User } from "../models/users.js";
const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const existingUser = await User.findOne({ token });
    if (!existingUser) {
        return res.status(401).json({ message: "Invalid token" });
    }
    req.user = existingUser;
    next();
};
export default validateToken;
//# sourceMappingURL=token.validate.js.map