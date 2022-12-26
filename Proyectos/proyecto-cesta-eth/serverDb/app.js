const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send("Home")
});
app.get('/ping', (req, res) => {
   
    res.send({"pong": new Date().toISOString()})
    
})
app.listen(7777, ()=> {
    console.log('escuchando en 7777')
})
