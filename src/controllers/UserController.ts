import {Response, Request} from "express";

import { UserModel } from "../models"

class UserController {
    constructor() {
    }

    index = () => {

    }

    static show = (req: Request,res: Response): any => {
        res.send(`with UC: show ${req.params.id}`)
    }

}


export default UserController;