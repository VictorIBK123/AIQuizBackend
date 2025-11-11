import { Document } from "mongoose";
export interface UserType extends Document {
    refreshToken: string;
    email: string;
}
//# sourceMappingURL=users.d.ts.map