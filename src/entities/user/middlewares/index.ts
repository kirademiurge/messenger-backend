import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../../shared";

export const userMiddleware = {
	idAdminRole (req: Request, res: Response, next: NextFunction) {
		try {
			const payload = req.body.payload;
			const userRole = payload.role;
			const neededRole: UserRole = "ADMIN";

			if ( userRole === neededRole ) next();
			else throw new Error("wrong role")
	
		} catch (error) {
			res.json({error: error});
		}
	},
}
