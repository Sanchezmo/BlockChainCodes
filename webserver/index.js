const express=require("express")
const app =express()
app.get("/",(req,res)=>{res.send("hola locuno")})

app.listen(3000,()=>{console.log("esta escuchando en el port 3000")})