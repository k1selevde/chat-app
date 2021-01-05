import { Router, Request, Response } from 'express'
const router = Router()

import { UploadController } from "../../controllers";


router.post('/', () => {console.log('f12')}, UploadController.create)

router.delete('/', UploadController.delete)


export default router;