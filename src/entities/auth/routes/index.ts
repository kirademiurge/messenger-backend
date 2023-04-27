import { Router } from "express";
import { authController } from "../controllers";
import { authMiddleware } from "../middlewares";
import { userMiddleware } from "../../user";

export const authRouter = Router();

// authRouter.post("/register", [userMiddleware.isUserNotExist], authController.register);
authRouter.post("/login", [userMiddleware.isUserExist, authMiddleware.isPasswordValid], authController.login);
