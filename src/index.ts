import express, { Application, Response, Request, NextFunction} from 'express';
import path from 'path'
import bodyParser from "body-parser";

import { userRouter, filesRouter, dialogsRouter, messagesRouter } from './core/routes'




const app: Application = express()

const port : string|number= process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname,  '../client', 'build')))

app.use('/api/user', userRouter)
app.use('/api/dialogs', dialogsRouter)
app.use('/api/messages', messagesRouter)
app.use('/api/files', filesRouter)

// app.use("/api", createRoutes(app));

app.get("*",(req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
})






//create a server object:
app.listen(port,() => console.log(`hosting @${port}`));