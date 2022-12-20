import {Request, Response,} from "express";

import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {AppDataSource} from "../data-source";
import {User} from "../model/User";
import UserService from "../service/user-service";

class UserController {


    getAll = async (req:Request,res:Response)=> {
        let user = await UserService.findAll()
        return res.status(200).json(user)
    }

    register = async (req: Request, res: Response) => {
        console.log(req.body)
        let addUser = await UserService.save(req.body)
        return res.status(200).json(addUser)
    }

    login = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await UserService.login(user.username)
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
                let SECRET = 'ha'
                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                })
                return res.status(200).json({
                    token: token,
                    mess: 'Success!',
                })
            }
        }
    }

    delete = async (req:Request,res:Response) => {
        await UserService.deleteUser(req.params.id)
        return res.status(204).json({
            mess: 'Delete Success !'
        })
    }

}

export default new UserController();