import {Router} from "express";
import BlogController from "../controller/blog-controller";

export const blogRouter = Router()
blogRouter.get('', BlogController.showAll)
