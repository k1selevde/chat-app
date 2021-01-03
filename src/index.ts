import express, { Application, Response, Request, NextFunction} from 'express';
import path from 'path'

const app: Application = express()

const port : string|number= process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname,  '../client', 'build')))

    app.get("*",(req: Request, res: Response) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    })
}





//create a server object:
app.listen(port,() => console.log(`hosting @${port}`));