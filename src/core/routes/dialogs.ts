import { Router, Request, Response } from 'express'
import { DialogController } from "../../controllers";

const router = Router()


router.get('/', DialogController.index)

router.delete('/:id', DialogController.delete)

router.post('/', DialogController.create)

export default router;