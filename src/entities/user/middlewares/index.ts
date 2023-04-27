import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { UserRole } from "../../../shared";

const prisma = new PrismaClient();

export const userMiddleware = {
	async isUserNotExist (req: Request, res: Response, next: NextFunction) {
		try {
			const user = await prisma.user.findUnique({
				where: { username: req.body.username },
			});

			if (user) throw new Error("user exists");
			next();

		} catch (error) {
			res.json({error: error});
		}
	},

	async isUserExist (req: Request, res: Response, next: NextFunction) {
		try {
			const user = await prisma.user.findUniqueOrThrow({
				where: { username: req.body.username },
			});

			req.body.foundUser = user;
			next();

		} catch (error) {
			res.json({error: "user doesn't exist"});
		}
	},

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
