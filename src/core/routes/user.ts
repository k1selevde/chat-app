import { Router, Request, Response } from 'express'
const router = Router()

import { UserController } from "../../controllers";


router.get('/me', UserController.getMe)
router.get('/verify', UserController.verify)
router.post('/signup', UserController.create)
router.post('/signin', UserController.login)
router.get("/find", UserController.findUsers);
router.get("/:id", UserController.show);
router.delete("/:id", UserController.delete);

export default router;