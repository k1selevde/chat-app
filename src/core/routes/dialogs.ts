import { Router, Request, Response } from 'express'
const router = Router()


router.get('/', (req: Request, res: Response) => {
    return res.send('dialogs my')
})

router.delete('/:id', (req: Request, res: Response) => {
    return res.send(`dialogs my ${req.params.id}`)
})

router.post('/', (req: Request, res: Response) => {
    return res.send('post  my dialogs')
})

export default router;