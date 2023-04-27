import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const messageService = {
	// NOT FOR ROUTES
	// ...

	// USER COMMANDS
	async create(body: any) {
		const message = await prisma.message.create({
			data: {
				senderId: body.payload.id,
				receiverId: body.id,
				body: body.body,
				repliedMessageId: body.repliedMessageId,
			},
		});
		return message;
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
