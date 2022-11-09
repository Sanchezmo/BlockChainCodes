import { useEffect, useState } from "react";
import {ethers} from "ethers";
import { useForm } from "react-hook-form";

const {ethereum} = window
/*// Setup: npm install alchemy-sdk
import { Alchemy } from "alchemy-sdk";
const alchemy = new Alchemy();
    
// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();
   
// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner(cuenta);
   
// Listen to all new pending transactions
alchemy.ws.on(
   { method: "alchemy_pendingTransactions",
   fromAddress: "0xshah.eth" },
   (res) => console.log(res)
);*/
export function Balance(){

    const {register,handleSubmit}=useForm();
    const [cuenta, setCuenta]=useState(null);
    const [balance, setBalance]=useState(null);
    const [ok,setOk]=useState(null);
    const [ko,setKo]=useState(null);
    useEffect(() => {
       ethereum && ethereum.request({method:'eth_requestAccounts'})
       .then(cuenta =>{
        setCuenta(cuenta[0])
         ethereum.on('accountsChanged', (i) =>{
            setCuenta(i[0])
         }) 
       })
    }, []);

    useEffect(() =>{
        if(cuenta){
            const provider= new ethers.providers.Web3Provider(ethereum)
            provider.getBalance(cuenta).then(balance =>{
               
                    console.log(ethers.utils.formatEther(balance))
                    setBalance(ethers.utils.formatEther(balance))
            
           
            })
        }
    }, [cuenta]);

    async function submit(data){
        setKo(null);
        setOk(null);
        const parametros={
            from: cuenta,
            to: data.direccion,
            value: ethers.utils.parseEther(data.cantidad).toHexString()
        }
        try{
            const tx= await ethereum.request({
                method: 'eth_sendTransaction',
                params: [parametros],
            })
            setOk(tx)
        }catch(error){
            setKo("error",error.message);
        }
       

    }
    
    if(!ethereum){
        return <div> No hay metamask</div>;
    }
        return(<>
            <h2>
               <p>Cuenta </p>
               <p>
                {
                    cuenta? cuenta : 'cargando...'
                    
                }
                </p>
                <p>Balance </p>
                <p>
                {
                    balance? balance : 'loading...'
                }
                </p>
            </h2>
            
            <form className="form-inline" onSubmit={handleSubmit(submit)}>
            <div className="form-group mb-3">
                 <label htmlFor="direccion">Direccion</label>
                 <input className="form-control" id="direccion" {...register("direccion")}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="cantidad">Cantidad</label>
                <input className="form-control" id="cantidad" {...register("cantidad")}/>
            </div>
            <button type="submit" className="btn btn-primary mb-3">ENVIAR</button>

            </form>
            {ok&&<div className="alert alert-info mt-3">{ok}</div>}
            {ko&&<div className="alert alert-danger mt-3">{ko}</div>}
            
            </>
        )   
    }

