const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/', (req,res)=>{
    res.send("hola soy web server cors")
})
app.listen(3345)