import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const messageService = {
	// USER COMMANDS
	async create(body: any) {
		return "message";
	},
}
