import { Router, Request, Response } from 'express'
const router = Router()


router.post('/', (req: Request, res: Response) => {
    return res.send('post files')
})

router.delete('/', (req: Request, res: Response) => {
    return res.send('delete files ')
})


export default router;