const express = require ('express')

const app = express()

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

app.listen(3344)
