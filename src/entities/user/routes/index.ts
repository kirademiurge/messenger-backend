import { Router } from "express";
import { userController } from "../controllers";
import { authMiddleware } from "../../auth/middlewares";
import { userMiddleware } from "../middlewares";

export const userRouter = Router();

// USER COMMANDS
userRouter.get("/getOne", [authMiddleware.isValideJwt], userController.getOne);
// userRouter.patch("/edit", [authMiddleware.isValideJwt], userController.edit);

// ADMIN COMMANDS
userRouter.get("/getAllAsAdmin", [authMiddleware.isValideJwt, userMiddleware.idAdminRole], userController.getAllAsAdmin);
userRouter.get("/getOneAsAdmin", [authMiddleware.isValideJwt, userMiddleware.idAdminRole], userController.getOneAsAdmin);
userRouter.post("/createAsAdmin", [authMiddleware.isValideJwt, userMiddleware.idAdminRole], userController.createAsAdmin);
userRouter.patch("/editAsAdmin", [authMiddleware.isValideJwt, userMiddleware.idAdminRole], userController.editAsAdmin);
userRouter.delete("/deleteAsAdmin", [authMiddleware.isValideJwt, userMiddleware.idAdminRole], userController.deleteAsAdmin);
userRouter.delete("/deleteManyAsAdmin", [authMiddleware.isValideJwt, userMiddleware.idAdminRole], userController.deleteManyAsAdmin);
