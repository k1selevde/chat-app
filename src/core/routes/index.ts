import express, {Application, Request, Response} from 'express'
import bodyParser from "body-parser";
import path from "path";

//routers
import userRouter from './user'
import dialogsRouter from './dialogs'
import messagesRouter from './messages'
import filesRouter from './files'


function createRoutes(app: Application) {
    app.use(bodyParser.json());
    app.use(express.static(path.resolve(__dirname,  '../../../client', 'build')))

    app.use('/api/user', userRouter)
    app.use('/api/dialogs', dialogsRouter)
    app.use('/api/messages', messagesRouter)
    app.use('/api/files', filesRouter)

    app.get("*",(req: Request, res: Response) => {
        res.sendFile(path.resolve(__dirname, '../../../client', 'build', 'index.html'))
    })
}

export default createRoutes