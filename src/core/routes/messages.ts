import { Router, Request, Response } from 'express'
const router = Router()


router.get('/', (req: Request, res: Response) => {
    return res.send('get messages')
})

router.post('/', (req: Request, res: Response) => {
    return res.send(`post message`)
})

router.delete('/', (req: Request, res: Response) => {
    return res.send('delete message ')
})

export default router;