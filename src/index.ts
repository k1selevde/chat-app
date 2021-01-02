import express from 'express';
import path from 'path'

const app = express()

const port : string|number= process.env.PORT || 5000;

app
    .use('/', express.static(path.resolve(__dirname,  '../client', 'build')))


app.use("*",(req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
})

//create a server object:
app.listen(port,() => console.log(`hosting @${port}`));