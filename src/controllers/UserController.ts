import {Response, Request} from "express";

import { UserModel } from "../models"

class UserController {
    constructor() {
    }

    index = () => {

    }

    // find user
    static show = (req: Request, res: Response): void => {
        const id: string = req.params.id
        res.send(`with UC: show ${req.params.id}`)
    }


    // find me doc
    static getMe = (req: Request, res: Response): void => {
        res.send("UC: Find all users by query")
    }


    static findUsers = (req: Request, res: Response): void => {
        res.send("UC: Find all users by query")
    }

    static delete = (req: Request, res: Response): void => {
        res.send("UC: Delete user by ID ")
    }


    static create = (req: Request, res: Response): void => {
        res.send("UC: Create user by req.body fields ")
    }

    static verify = (req: Request, res: Response): void => {
        res.send("UC: Verify new acc")
    }

    static login = (req: Request, res: Response): void => {
        res.send("UC: Login by req body fields")
    }

}



export default UserController;