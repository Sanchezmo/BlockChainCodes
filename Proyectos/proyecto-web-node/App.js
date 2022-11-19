const express = require ('express')

const app = express()
const fileupload = require("express-fileupload")
const {Pool} = require('pg')

const pool =new Pool({
    host: "localhost",
        port: 5432,
        database: "postgres",
        user: "postgres",
        password: "mysecretkey"
})

app.get('/bdd/test', async (req, res)=>{
    try {
    const respuesta= await pool.query("select now()")
    res.send(respuesta.rows)
    }catch(error){
        res.status(500).send(error)
    }
})
app.get('/bdd/customers', async (req, res)=>{
    try {
    const respuesta= await pool.query("select * from customers")
    res.send(respuesta.rows)
    }catch(error){
        res.status(500).send(error)
    }
})
app.get('/bdd/customers/:id', async (req, res)=>{
    try {
    const respuesta= await pool.query("select * from customers where customer_id= $1",[req.params.id])
    res.send(respuesta.rows)
    }catch(error){
        res.status(500).send(error)
    }
})
app.get('/bdd/orders/:cliente/:id', async (req, res)=>{
    try {
    const respuesta= await pool.query("select * from orders where customer_id= $1 and order_id=$2",[req.params.cliente,req.params.id])
    if(respuesta.rows==0){
        res.status(404).send("no existe factura del cliente")
    }else{
    res.send(respuesta.rows[0])
    }
    }catch(error){
        res.status(500).send(error)
    }
})
app.use(fileupload({
    limits: { fileSize: 1024 * 1024 * 1024 },

}))
const morgan = require("morgan")
app.use(morgan('tiny'))
app.use(express.static("public",{index:"myindex.html"}))
app.use("/docs",express.static("docs",{index:"myindex.html"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/enlace2",function(req, res){
    res.send("Hello World 2!")
})
app.get("/enlace1",(req, res)=>{
    res.send("Hello Worl 1!")
})
app.get("/problema",(req, res)=>{
    res.status(500)
    res.send("Hay problema")
})


app.post("/echopost",(req, res)=>{
    res.send({body:req.body})
})
app.post("/echopostjson",(req, res)=>{
    res.send({body:req.body, qs:req.query})
})
app.post("/echopostjson/:cliente/:fecha",(req, res)=>{
    res.send({body:req.body,
         qs:req.query,
         params:req.params
    })
})
app.post("/uploadfichero",async(req, res)=>{
    const f1=req.files.file1
    await f1.mv(`uploads/${f1.name}`)
    res.send({body:req.body, fichero:{
        nombre: req.files.file1.name
    }})
    
})
app.post("/uploadficheromultiple",async(req, res)=>{
    for(const [index,file]of req.files.file.entries()) {
        await file.mv(`uploads/${file.name}`)
    }
    res.send("ficheros subiudos")
})

app.listen(3344)

