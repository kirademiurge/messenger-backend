import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const messageMiddleware = {
	async isOwnMessage (req: Request | any, res: Response, next: NextFunction) {
		try {
			const message = await prisma.message.findUniqueOrThrow({
				where: {
					id: req.body.id,
				}
			});
			if (req.payload.id !== message.senderId) throw new Error("it is not your message");
			next();

		} catch (error) {
			res.json({error: error});
		}
	},

	async isOwnMessages (req: Request | any, res: Response, next: NextFunction) {
		try {
			const messages = await prisma.message.findMany({
				where: {
					id: { in: req.body.ids },
				}
			});

			messages.forEach( (message) => {
				if (req.payload.id !== message.senderId) throw new Error("it is not your message");
			});
			
			next();

		} catch (error) {
			res.json({error: error});
		}
	},
}
