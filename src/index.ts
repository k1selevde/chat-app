import express from "express";
import cors from "cors"
import path from "path"
import bodyParser from "body-parser";


const PORT : string|number = process.env.PORT || 5000;

const app = express();

app.use("*",(req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});



app.listen(PORT,() => console.log(`hosting @${PORT}`));
