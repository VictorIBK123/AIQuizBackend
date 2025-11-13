import express, { Router } from 'express';
import { User } from '../models/users.js';
const registerTokenRouter = express.Router();
registerTokenRouter.post('/register', (req, res) => {
    const { email, refreshToken } = req.body;
    if (!email || !refreshToken) {
        return res.json({ success: false, message: 'Email and refreshToken are required.' });
    }
    const newUser = new User({ email, refreshToken });
    newUser.save().catch(err => {
        console.error('Error saving user token:', err);
        return res.json({ success: false, message: 'Internal server error.' });
    });
    console.log(`Registering token for ${email}: ${refreshToken}`);
    return res.json({ success: true, message: 'Token registered successfully.' });
});
export default registerTokenRouter;
//# sourceMappingURL=token.register.js.map