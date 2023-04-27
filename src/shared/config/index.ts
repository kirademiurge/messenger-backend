import "dotenv/config";

export const config = {
	port: process.env.PORT || 8000,
	db: {
		host: process.env.DB_HOST || "localhost",
		port: process.env.DB_PORT || 5432,
		username: process.env.DB_USERNAME || "test",
		password: process.env.DB_PASSWORD || "test",
		database: process.env.DB_DATABASE || "dev",
	},
	jwt: {
		secretKey: process.env.JWT_SECRET_KEY || "secret",
		expiresIn: process.env.JWT_EXPIRES_IN || "24h",
	},
}
