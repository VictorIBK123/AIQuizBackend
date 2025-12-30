import express, { type Response } from 'express'
import validateToken from '../middleware/token.validate.js'
import type AuthenticatedRequest from '../types/authenticated.request.js'
import { User } from '../models/users.js'
import getAppData from '../services/appdata.get.js'
import updateAppData from '../services/appdata.update.js'
const appDataRouter = express.Router()

appDataRouter.get('/get', validateToken, async (req: AuthenticatedRequest, res: Response)=>{
    const user = req.user
    if (!user){
        return res.status(401).json({message: "Unauthorized"})
    }
    try {
        const dbUser = await getAppData(user.email)
        res.status(200).json({appData: dbUser||{}})
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

appDataRouter.put('/update', validateToken, async (req: AuthenticatedRequest, res: Response)=>{
    const {appData} = req.body
    if (!appData){
        return res.status(400).json({message: "appData is required"})
    }
    const user = req.user
    if (!user){
        return res.status(401).json({message: "Unauthorized"})
    }
    try {
        await updateAppData(user.email, appData)
        res.status(200).json({message: "App data updated successfully"})
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
})

export default appDataRouter