import express, { Application, Response, Request, NextFunction} from 'express';
import path from 'path'
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

import User from './models/User'
//import { userRouter, filesRouter, dialogsRouter, messagesRouter } from './core/routes'
import createRoutes from "./core/routes";




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

createRoutes(app)
// app.use("/api", createRoutes(app));







//create a server object:
app.listen(port,() => console.log(`hosting @${port}`));