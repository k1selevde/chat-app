import { Router, Request, Response } from 'express'
const router = Router()

router.get('/me', (req: Request, res: Response) => {
    return res.send('Tanki')
})

router.get('/verify', (req: Request, res: Response) => {
    return res.send('verify')
})

router.post('/signup', (req: Request, res: Response) => {
    return res.send('signup post')
})

router.post('/signin', (req: Request, res: Response) => {
    return res.send('signin post')
})

router.get("/find", (req: Request, res: Response) => {
    return res.send('find users')
});

router.get("/:id", (req: Request, res: Response) => {
    console.log(req.params)
    return res.send(`get user by id, ${req.params.id}`)
});

router.delete("/:id", (req: Request, res: Response) => {
    return res.send('delete user by id')
});

export default router;