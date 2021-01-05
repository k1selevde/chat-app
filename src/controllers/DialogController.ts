import { Request, Response} from "express";

class DialogController {
    constructor() {
    }

    static index = (req: Request, res: Response): void => {
            res.send("DC: index")
    }

    static create = (req: Request, res: Response): void => {
        res.send("DC: create")
    }

    static delete = (req: Request, res: Response): void => {
        res.send("DC: delete")
    }

}

export default DialogController;