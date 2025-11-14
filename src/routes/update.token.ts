import express, {Router} from 'express'
import { User } from '../models/users.js';
const updateTokenRouter: Router = express.Router();
updateTokenRouter.put('/update',async (req, res) => {
    const { email, refreshToken } = req.body;
    if (!email || !refreshToken) {
        return res.status(400).json({ message: 'Email and refreshToken are required.' });
    }
    try {
        await User.findOneAndUpdate({email}, {token: refreshToken}, );
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.' });
    }
    console.log(`Updating token for ${email}: ${refreshToken}`);
    return res.status(200).json({ message: 'Token updated successfully.' });
});

export default updateTokenRouter;