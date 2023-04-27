import { Router } from "express";
import { authController } from "../controllers";
import { authMiddleware } from "../middlewares";

export const authRouter = Router();

// authRouter.post("/register", [authMiddleware.isUserNotExist], authController.register);
authRouter.post("/login", [authMiddleware.isUserExist, authMiddleware.isPasswordValid], authController.login);
