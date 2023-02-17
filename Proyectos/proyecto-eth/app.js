const web3 = require('web3');
const web = new web3("http://localhost:8545");
async function getUtimoBloque(){
    const bloque = await web.eth.getBlockNumber();
    console.log(bloque);
    return bloque;
};
