import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { UserRole, config } from "../../../shared";

const prisma = new PrismaClient();

export const authMiddleware = {
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

	async isPasswordValid (req:Request, res: Response, next: NextFunction) {
		try {
			const user = req.body.foundUser;
			if (user.password === req.body.password) next();
			else throw new Error("password is wrong");

		} catch (error) {
			res.json({error: error});
		}
	},

	isValideJwt (req: Request, res: Response, next: NextFunction) {
		try {
			const token: any = req.headers.jwt;
			if (!token) throw new Error("no token");
			const payload = jwt.verify(token, config.jwt.secretKey);
			if(!payload) throw new Error("wrong payload");

			req.body.payload = payload;
			next();
	
		} catch (error) {
			res.json({error: error});
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
