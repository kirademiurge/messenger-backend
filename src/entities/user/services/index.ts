import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userService = {
	// NOT FOR ROUTES
	async create(body: any) {
		const user = await prisma.user.create({
			data: {
				username: body.username,
				name: body.name,
				password: body.password,
				// role: body.role,
				color: "red",
				avapic: body.avapic,
				bio: body.bio,
			}
		});
		return user;
	},

	// USER COMMANDS
	async getOne(body: any) {
		const user = await prisma.user.findUniqueOrThrow({
			where: {
				id: body.payload.id,
			},
			select: {
				id: true,
				username: true,
				name: true,
				color: true,
				createdAt: true,
				updatedAt: true,
				avapic: true,
				bio: true,
			}
		});
		return user;
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

		const users = messages.map( (message) => {
			if (message.sender.id === body.payload.id) return message.receiver;
			return message.sender;
		});

		const uniqueUsers = users.filter( (user, index) => {
			return users.findIndex( (elem) => elem.id === user.id ) === index;
		});

		return uniqueUsers;
	},

	async edit(body: any) {
		const user = await prisma.user.update({
			where: {
				id: body.payload.id,
			},
			data: {
				username: body.username,
				name: body.name,
				password: body.password,
				avapic: body.avapic,
				bio: body.bio,
				updatedAt: new Date(),
			}
		});
		return user;
	},

	// ADMIN COMMANDS
	async getAllAsAdmin() {
		const users = await prisma.user.findMany();
		return users;
	},

	async getOneAsAdmin(body: any) {
		const user = await prisma.user.findUniqueOrThrow({
			where: {
				username: body.username,
			},
		});
		return user;
	},

	async createAsAdmin(body: any) {
		const user = await prisma.user.create({
			data: {
				username: body.username,
				name: body.name,
				password: body.password,
				role: body.role,
				color: body.color,
				avapic: body.avapic,
				bio: body.bio,
			}
		});
		return user;
	},

	async editAsAdmin(body: any) {
		const user = await prisma.user.update({
			where: {
				id: body.id,
			},
			data: {
				username: body.username,
				name: body.name,
				password: body.password,
				role: body.role,
				color: body.color,
				avapic: body.avapic,
				bio: body.bio,
				updatedAt: new Date(),
			}
		});
		return user;
	},
	// I HAVE TO ADD editManyAsAdmin

	async deleteAsAdmin(body: any) {
		const user = await prisma.user.delete({
			where: {
				id: body.id,
			},
		});
		return user;
	},

	async deleteManyAsAdmin(body: any) {
		const users = await prisma.user.deleteMany({
			where: {
				id: { in: body.ids },
			},
		});
		return users;
	},
}
