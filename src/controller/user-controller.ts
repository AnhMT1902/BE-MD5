import {Request, Response,} from "express";
import UserService from "../service/user-service";


class UserController {
    register = async (req: Request, res: Response) => {
        let user = await UserService.register()
        return res.status(200).json(user)
    }
    login = async (req: Request, res: Response) => {
        return await UserService.login()
    }
}

export default new UserController()