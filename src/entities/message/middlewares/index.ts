import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const messageMiddleware = {
	async isReceiverExist (req: Request, res: Response, next: NextFunction) {
		try {
			const receiver = await prisma.user.findUniqueOrThrow({
				where: { id: req.body.id },
			});

			req.body.foundReceiverr = receiver;
			next();

		} catch (error) {
			res.json({error: "receiver doesn't exist"});
		}
	},

	isMessageNotEmpty (req: Request, res: Response, next: NextFunction) {
		try {
			const message = req.body.body;
			if (!message) throw new Error("message is empty");
			next();

		} catch (error) {
			res.json({error: error});
		}
	},

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
}
