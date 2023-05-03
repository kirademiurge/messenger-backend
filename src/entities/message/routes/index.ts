import { Router } from "express";
import { messageController } from "../controllers";
import { authMiddleware } from "../../auth";
import { messageMiddleware } from "../middlewares";

export const messageRouter = Router();

// USER COMMANDS
messageRouter.post("/create", [authMiddleware.isValideJwt], messageController.create);
messageRouter.get("/getAll", [authMiddleware.isValideJwt], messageController.getAll);
messageRouter.get("/getNew", [authMiddleware.isValideJwt], messageController.getNew);
messageRouter.delete("/delete", [authMiddleware.isValideJwt, messageMiddleware.isOwnMessage], messageController.delete);
messageRouter.delete("/deleteMany", [authMiddleware.isValideJwt, messageMiddleware.isOwnMessages], messageController.deleteMany);
messageRouter.patch("/checkMany", [authMiddleware.isValideJwt, messageMiddleware.isOwnMessages], messageController.checkMany);
messageRouter.patch("/edit", [authMiddleware.isValideJwt, messageMiddleware.isOwnMessage], messageController.edit);

// ADMIN COMMANDS
messageRouter.get("/getAllAsAdmin", [authMiddleware.isValideJwt], messageController.getAllAsAdmin);
messageRouter.delete("/deleteAsAdmin", [authMiddleware.isValideJwt], messageController.deleteAsAdmin);
messageRouter.delete("/deleteManyAsAdmin", [authMiddleware.isValideJwt], messageController.deleteManyAsAdmin);
messageRouter.patch("/editAsAdmin", [authMiddleware.isValideJwt], messageController.editAsAdmin);
