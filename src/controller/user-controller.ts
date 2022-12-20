import {Request, Response,} from "express";
import UserService from "../service/user-service";
import bcrypt from 'bcrypt';
import {SECRET} from "../middleware/auth";
import jwt from "jsonwebtoken";

class UserController {

    register = async (req: Request, res: Response) => {
        let user = await UserService.register()
        return res.status(200).json(user)
    }

    login = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await UserService.login(user)
        if (!userFind) {
            return res.status(201).json({
                mess: "Error User or Password!!!"
            })
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind.password);
            if (!comparePassword) {
                return res.status(201).json({
                    mess: "Error User or Password!!!"
                })
            } else {
                let payload = {
                    idUser: userFind._id,
                    username: userFind.username
                }
                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                })
                return res.status(200).json({
                    token: token,
                    mess: 'Success!',
                    idUser: userFind._id
                })
            }
        }
    }

    editAccount = async (req: Request, res: Response) => {
        let id = req.params.id
        await UserService.editAccount({_id: id})
        return res.status(201).json({
            mess:'Edit Success!'
        })
    }



}

export default new UserController();