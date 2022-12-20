import {Router} from "express";
import UserController from "../controller/user-controller";
import {userRouter} from "./user-router";
import {auth} from "../middleware/auth";
import {blogRouter} from "./blog-router";

export const router = Router();
router.use('', userRouter);
// router.use(auth)
router.use('', blogRouter)