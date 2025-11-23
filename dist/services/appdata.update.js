import { User } from "../models/users.js";
const updateAppData = async (email, data) => {
    const user = await User.findOneAndUpdate({ email }, { appData: data });
    return 0;
};
export default updateAppData;
//# sourceMappingURL=appdata.update.js.map