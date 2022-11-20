const express = require('express')
const clientes = express.Router()

module.exports={
    clientes
}

clientes.get("/",(req,res)=>{
    res.send("soy la ruta de clientes")
})

clientes.get("/wellcome",(req,res)=>{
    res.send("bienvenido cliente")
})