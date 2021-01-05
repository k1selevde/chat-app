import { Request, Response} from "express";


class UploadController {
    constructor() {
    }

    static create = (req: Request, res: Response): void => {
        res.send("UploadC: create")
    }

    static delete = (req: Request, res: Response): void => {
        res.send("UploadC: delete")
    }
}

export default UploadController;