
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser"
const app:Application=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", async (req:Request, res: Response)=>{
    res.send("hola")
})
app.post("/formulario", async (req:Request, res: Response)=>{
    res.send(JSON.stringify(req.body))
})
app.listen(4444)