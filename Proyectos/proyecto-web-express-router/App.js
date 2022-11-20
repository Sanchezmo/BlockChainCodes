const express = require('express')
const {clientes}= require('./clientes')
const {productos}= require('./productos')
const app = express()

app.listen(45999)
app.use("/cli",clientes)
app.use("/pro",productos)
app.get('/', (req,res)=> {
    res.send("soy la ruta principal del servidor")
})