const express = require('express');
const app = express();
const mysql = require('./db.js');
const cors = require('cors');
app.use(cors())
app.get('/', function(req, res) {
    res.send("Home")
});
app.get('/products/:id', async (req, res) => {
    try {
        const [results,fields] = await mysql.q("SELECT * FROM Products where ProductId =?",[req.params.id])
        res.send(results)
    } catch (error) {
        res.send({error: error.message})
    }
   
})
app.get('/ping', (req, res) => {
   
    res.send({"pong": new Date().toISOString()})
    
})
app.listen(7777, ()=> {
    console.log('escuchando en 7777')
})
