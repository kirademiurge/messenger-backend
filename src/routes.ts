import {Router, Request, Response} from "express";
import { authRouter } from "./entities/auth";
import { userRouter } from "./entities/user";
import { messageRouter } from "./entities/message";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => res.send("hello, kira!"));
routes.use("/auth", authRouter);
routes.use("/user", userRouter);
routes.use("/message", messageRouter);
