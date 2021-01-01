import express from "express";
import cors from "cors"
import path from "path"



const PORT : string|number = process.env.PORT || 5000;

const app = express();


app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));
