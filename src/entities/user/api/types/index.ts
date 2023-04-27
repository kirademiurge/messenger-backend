import { AvapicColor, UserRole } from "../../../../shared";

export interface User {
	id: number,
	username: string,
	name: string,
	password: string,
	role: UserRole,
	color: AvapicColor,
	avapic?: string,
	bio?: string,
}
