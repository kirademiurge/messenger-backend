import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const messageService = {
	// NOT FOR ROUTES
	// ...

	// USER COMMANDS
	async create(body: any) {
		if (!body.body) throw new Error("message is empty");
	
		const message = await prisma.message.create({
			data: {
				senderId: body.payload.id,
				receiverId: body.id,
				body: body.body && undefined,
				repliedMessageId: body.repliedMessageId,
			},
		});
		return message;
	},

	async getAll(body: any) {
		const messages = await prisma.message.findMany({
			where: {
				OR: [
					{ sender: { id: body.payload.id } },
					{ receiver: { id: body.payload.id } },
				],
			},
			include: {
				sender: true,
				receiver: true,
			},
		});

		return messages;
	},

	async getNew(body: any) {
		const messages = await prisma.message.findMany({
			where: {
				isChecked: false,
				OR: [
					{ sender: { id: body.payload.id } },
					{ receiver: { id: body.payload.id } },
				],
			},
			include: {
				sender: true,
				receiver: true,
			},
		});

		return messages;
	},

	async delete(body: any) {
		const message = await prisma.message.delete({
			where: {
				id: body.id,
			},
		});
		return message;
	},

	async deleteMany(body: any) {
		const messages = await prisma.message.deleteMany({
			where: {
				id: { in: body.ids },
			},
		});
		return messages;
	},

	async checkMany(body: any) {
		const messages = await prisma.message.updateMany({
			where: {
				id: {in: body.ids},
			},
			data: {
				isChecked: true,
			},
		});
		return messages;
	},

	async edit(body: any) {
		const message = await prisma.message.update({
			where: {
				id: body.id,
			},
			data: {
				editedBody: body.editedBody,
			},
		});
		return message;
	},

	// ADMIN COMMANDS
	async getAllAsAdmin(body: any) {
		const messages = await prisma.message.findMany();
		return messages;
	},

	async deleteAsAdmin(body: any) {
		const message = await prisma.message.delete({
			where: {
				id: body.id,
			},
		});
		return message;
	},

	async deleteManyAsAdmin(body: any) {
		const messages = await prisma.message.deleteMany({
			where: {
				id: { in: body.ids },
			},
		});
		return messages;
	},

	async editAsAdmin(body: any) {
		const message = await prisma.message.update({
			where: {
				id: body.id,
			},
			data: {
				editedBody: body.editedBody,
			},
		});
		return message;
	},
}
