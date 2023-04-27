import { Router } from "express";
import { messageController } from "../controllers";
import { authMiddleware } from "../../auth";
import { messageMiddleware } from "../middlewares";

export const messageRouter = Router();

// USER COMMANDS
messageRouter.post("/create", [authMiddleware.isValideJwt, messageMiddleware.isReceiverExist, messageMiddleware.isMessageNotEmpty], messageController.create);
// messageRouter.delete("/delete", [authMiddleware.isValideJwt, messageMiddleware.isOwnMessage], messageController.delete);
// messageRouter.delete("/deleteMany", [authMiddleware.isValideJwt], messageController.deleteMany); // NEED EXTRA MIDDLEWARE
// messageRouter.patch("/checkMany", [authMiddleware.isValideJwt], messageController.checkMany); // NEED EXTRA MIDDLEWARE
// messageRouter.patch("/edit", [authMiddleware.isValideJwt], messageController.edit); // NEED EXTRA MIDDLEWARE

// ADMIN COMMANDS
messageRouter.delete("/deleteAsAdmin", [authMiddleware.isValideJwt, messageMiddleware.isOwnMessage], messageController.deleteAsAdmin);
messageRouter.delete("/deleteManyAsAdmin", [authMiddleware.isValideJwt], messageController.deleteManyAsAdmin);
messageRouter.patch("/editAsAdmin", [authMiddleware.isValideJwt], messageController.editAsAdmin);
