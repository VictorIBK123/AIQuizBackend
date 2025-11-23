import { User } from "../models/users.js"

const getAppData = async(email: string)=>{
    const user = await User.findOne({email})
    return user?.appData
}

export default getAppData