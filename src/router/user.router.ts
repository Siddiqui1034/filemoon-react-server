import { Router } from "express";
import { signup } from "../controller/user.controller.ts";

const userRouter = Router();

userRouter.post("/", signup);
// userRouter.post("/", signup);

export default userRouter;
