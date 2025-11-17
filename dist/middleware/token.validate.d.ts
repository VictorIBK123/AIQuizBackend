import type { Request, Response } from "express";
import type { UserType } from "../types/users.js";
interface AuthenticatedRequest extends Request {
    user?: UserType;
}
declare const validateToken: (req: AuthenticatedRequest, res: Response, next: Function) => Promise<Response<any, Record<string, any>> | undefined>;
export default validateToken;
//# sourceMappingURL=token.validate.d.ts.map