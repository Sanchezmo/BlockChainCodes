const express = require('express')
const {Pool} = require("pg")
const app = express()
const cors = require('cors')
app.use(cors())
const connectionString = {
    user: "postgres",
    database: "postgres",
    password: "123456",
    port: 5431
}
const pool = new Pool(connectionString)

app.listen(3000)
app.get('/', async (req, res) =>{
    const response= await pool.query("select * form customers limit 10",[])
    res.send(response.rows)
    res.send("Estamos a "+new Date())
})