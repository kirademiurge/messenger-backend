import { Router } from "express";
import { authController } from "../controllers";
import { authMiddleware } from "../middlewares";
import { userMiddleware } from "../../user";

export const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", [authMiddleware.isPasswordValid], authController.login);
