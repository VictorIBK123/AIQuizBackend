import type { UserType } from "./users.js";
import { type Request } from "express";
export default interface AuthenticatedRequest extends Request {
    user?: UserType;
}
//# sourceMappingURL=authenticated.request.d.ts.map