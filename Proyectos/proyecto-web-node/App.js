const express = require('express')

const app = express()
const fileupload = require("express-fileupload")
const {Pool} = require('pg')
const Web3 = require("web3")
const WEB3_PROVIDER ='https://goerli.infura.io/v3/8e5c4f05377e4613b0a8d0c7511079ba'
const web3 = new Web3(WEB3_PROVIDER)
const Minio = require('minio')

app.set("view engine","pug")

app.get('/template1', function (req, res) {
    res.render("template.pug",{title:"server page pug", message:"estamos en la template"})
})

const minioCLient= new Minio.Client({
    endPoint:"localhost",
    port: 9000,
    accessKey: "minioadmin",
    secretKey: "minioadmin",
    useSSL: false
})
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

app.get("/balance/:address", async (req, res) => {
    try{
        const balance = await web3.eth.getBalance(req.params.address)
        res.send(balance)
    }catch(error){
        res.status(500).send("error "+error)
    }
})
// MINIOOOO
app.post("/minio", async (req, res) => {
    try{
    await minioCLient.makeBucket(req.params.nombre, 'us-east-1')
    res.status(200).send({resultado: "ok"})
    }catch(error){
        res.status(500).send(error)
    }
})
//falta formulario
app.post("/minio/addfile", async (req, res) => {
    try{
    await minioCLient.putObject(req.body.nombrebu, file.fichero, file.data)
    res.status(200).send({resultado: "ok"})
    }catch(error){
        res.status(500).send(error)
    }
})
app.get("minio/:bucket/:fichero", async (req, res) => {
    try{
   const dataStream= await minioCLient.getObject(req.params.bucket,req.params.fichero)
   dataStream.pipe(res)
    res.status(200).send({resultado: "ok"})
    }catch(error){
        res.status(500).send(error)
    }
})
app.delete("minio/:bucket/:fichero", async (req, res) => {
    try{
       await minioCLient.removeObject(req.params.bucket, req.params.fichero)
    res.status(200).send({resultado: "ok"})
    }catch(error){
        res.status(500).send(error)
    }
})
app.get("/error",(req,res) =>{
    throw new Error("se ha poroducido un error no puedo seguir")
})
app.use((error, req, res,next) =>{
    res.status(500).send(error.message)
})

app.get("*", (req,res) =>{
    res.redirect("/404.html")
    //res.status(404).send("not found")
})
app.listen(3344)

