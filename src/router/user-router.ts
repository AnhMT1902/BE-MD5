import {Router} from "express";
import {auth} from "../middleware/auth";
import UserController from "../controller/user-controller";

export const userRouter = Router();
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.get('/', UserController.getAll)
userRouter.delete('/:id', UserController.delete)
// userRouter.use(auth)
