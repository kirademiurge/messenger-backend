import jwt from 'jsonwebtoken';
import { User } from "../../entities/user";
import { config } from '../config';

export const utils = {
	generateToken (user: User) {
		const payload = {
			id: user.id,
			name: user.username,
			role: user.role,
		}
		const token = jwt.sign(payload, config.jwt.secretKey, {expiresIn: config.jwt.expiresIn} );
		return token;
	}
}
