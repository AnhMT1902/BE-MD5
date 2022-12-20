import {Request, Response} from "express";
import BlogService from "../service/blog-service";

class BlogController {
    showAll = async (req: Request, res: Response) => {
        let blogs = BlogService.getAll()
        res.status(200).json(blogs)
    }
}

export default new BlogController()