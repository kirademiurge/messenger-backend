import { utils } from "../../../shared";
import { userService } from "./../../user";

export const authService = {
	async register(body: any) {
		const user: any = await userService.create(body);
		const token = utils.generateToken(user);
		return {token, user};
	},

	async login(body: any) {
		const user = body.foundUser;
		const token = utils.generateToken(user);
		return {token, user};
	},
}
