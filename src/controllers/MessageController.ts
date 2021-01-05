import { Request, Response} from "express";

class MessageController {

    constructor() {
    }

    static index = (req: Request, res: Response): void => {
        res.send("MessageC: index")
    }

    static updateReadStatus = (
        res: Response,
        userId: string,
        dialogId: string
    ) => {
        //res.send("MessageC: update message read status")
    }

    static create = ( req: Request, res: Response): void => {
        res.send("MessageC: create")
    }

    static delete = ( req: Request, res: Response): void => {
        res.send("MessageC: delete")
    }

}


export default MessageController;