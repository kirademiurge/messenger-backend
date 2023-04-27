import { Router } from "express";
import { messageController } from "../controllers";
import { authMiddleware } from "../../auth";

export const messageRouter = Router();

// USER COMMANDS
messageRouter.post("/create", [authMiddleware.isValideJwt], messageController.create);
