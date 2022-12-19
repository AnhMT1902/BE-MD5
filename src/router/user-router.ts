import {Router} from "express";
import {auth} from "../middleware/auth";
import UserController from "../controller/user-controller";

export const userRouter = Router();
userRouter.get('/register', UserController.register);
userRouter.post('/login', UserController.login);
// userRouter.use(auth)
