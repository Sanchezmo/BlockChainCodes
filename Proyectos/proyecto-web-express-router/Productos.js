const express = require('express')
const productos = express.Router()

module.exports={
    productos
}
    productos.get("/",(req,res)=>{
    res.send("soy la ruta de productos")
})