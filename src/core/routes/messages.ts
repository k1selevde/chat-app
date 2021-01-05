import { Router, Request, Response } from 'express'
import { MessageController } from "../../controllers";

const router = Router()


router.get('/', MessageController.index)

router.post('/', MessageController.create)

router.delete('/', MessageController.delete)

export default router;