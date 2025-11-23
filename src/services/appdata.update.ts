import { User } from "../models/users.js"
import type { appData } from "../types/users.js"

const updateAppData =async (email: string, data: appData )=>{
    const user = await User.findOneAndUpdate({email},{appData: data})
    return 0
}

export default updateAppData