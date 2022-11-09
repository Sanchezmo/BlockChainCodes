import { useState } from "react"
export function Hook(){
//hook reutilizable
const useContador= (num)=>{
    const [c,setC]= useState(num)
    const incrementar= ()=> setC(c+1)
    const decrementar= ()=> setC(c-1)
    const reset= ()=> setC(0)
    return {
        c,
        incrementar,
        decrementar,
        reset
    }
}
//hook reutilizable
const{c,incrementar,decrementar,reset} = useContador(0)
const{c:c2,incrementar:inc2,decrementar:dec2,reset:reset2} = useContador(99)
    return( <div>
        {c}
        <button onClick={()=>incrementar()}>Incrementar</button>
        <button onClick={()=>decrementar()}>Decrementar</button>
        <button onClick={()=>reset()}>Reset</button>
        <hr></hr>
        <p>Reutilizado:</p>
        {c2}
        <button onClick={()=>inc2()}>Incrementar</button>
        <button onClick={()=>dec2()}>Decrementar</button>
        <button onClick={()=>reset2()}>Reset</button>
            </div>
    )
}