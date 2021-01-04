import express, { Application, Response, Request, NextFunction} from 'express';
import path from 'path'
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

import User from './models/User'
import { userRouter, filesRouter, dialogsRouter, messagesRouter } from './core/routes'




const app: Application = express()

const port : string|number= process.env.PORT || 5000;

try {
    mongoose.connect(`${process.env.CONNECT_URL}`,
        { useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log(`Success connect!`)
    )
} catch (e) {
    console.log(e)
}

// const user = new User({
//     email: 'den4ik123flow',
//     avatar: 'sdf',
//     fullname: 'Denis Redis',
//     password: '111',
//     confirmed: true,
//     confirm_hash: '111',
// });
// user.save().then((docUser) => console.log(`User created ${docUser}`))

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