import express from "express";
const cors = require('cors')
const path = require('path')
import bodyParser from "body-parser";


const PORT = process.env.PORT || 5000;

const app = express();


app
    .use('/', express.static(path.resolve(__dirname,  'client', 'build')))
    .use(cors())
    .use(bodyParser.json());

app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})


const server = app.listen(PORT, function () {
    console.log('Server has been started! YeYs')
})


