import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../../shared";

export const authMiddleware = {
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
}
