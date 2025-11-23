import { User } from "../models/users.js";
const getAppData = async (email) => {
    const user = await User.findOne({ email });
    return user?.appData;
};
export default getAppData;
//# sourceMappingURL=appdata.get.js.map