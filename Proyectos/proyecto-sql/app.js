const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.send({fecha: new Date().toISOString()})
})

app.listen(5555, ()=> {
console.log("listening on 5555")
})