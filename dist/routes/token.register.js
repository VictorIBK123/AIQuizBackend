import express, { Router } from 'express';
import { User } from '../models/users.js';
const registerTokenRouter = express.Router();
registerTokenRouter.post('/register', async (req, res) => {
    const { email, refreshToken } = req.body;
    if (!email || !refreshToken) {
        return res.status(400).json({ message: 'Email and refreshToken are required.' });
    }
    const newUser = new User({ email, token: refreshToken });
    try {
        await newUser.save();
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error.' });
    }
    console.log(`Registering token for ${email}: ${refreshToken}`);
    return res.status(200).json({ message: 'Token registered successfully.' });
});
export default registerTokenRouter;
//# sourceMappingURL=token.register.js.map