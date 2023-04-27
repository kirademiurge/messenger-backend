import { Router } from "express";
import { userController } from "../controllers";
import { authMiddleware } from "../../auth";

export const userRouter = Router();

// USER COMMANDS
userRouter.get("/getOne", [authMiddleware.isValideJwt], userController.getOne);
// userRouter.patch("/edit", [authMiddleware.isValideJwt], userController.edit);

// ADMIN COMMANDS
userRouter.get("/getAllAsAdmin", [authMiddleware.isValideJwt, authMiddleware.idAdminRole], userController.getAllAsAdmin);
userRouter.get("/getOneAsAdmin", [authMiddleware.isValideJwt, authMiddleware.idAdminRole], userController.getOneAsAdmin);
userRouter.post("/createAsAdmin", [authMiddleware.isValideJwt, authMiddleware.idAdminRole], userController.createAsAdmin);
userRouter.patch("/editAsAdmin", [authMiddleware.isValideJwt, authMiddleware.idAdminRole], userController.editAsAdmin);
userRouter.delete("/deleteAsAdmin", [authMiddleware.isValideJwt, authMiddleware.idAdminRole], userController.deleteAsAdmin);
userRouter.delete("/deleteManyAsAdmin", [authMiddleware.isValideJwt, authMiddleware.idAdminRole], userController.deleteManyAsAdmin);
