import { useState, useEffect } from "react"
export function Efecto({numero}){
    const [data,setData] = useState(null)
    const [contador,setContador] = useState(0)
    console.log("renderizando")
    useEffect(() => {
        console.log("accesso a base de datos"+numero)
        fetch("https://jsonplaceholder.typicode.com/posts/"+numero)
        .then(response => response.json())
        .then(data => setData(data))
       
    }, [/*contador, poniendo aqui la variable ejecutaria el useeffect por cada contador que incremete*/]);
   
    if (!data){ return (<div><hr></hr>Cargando...el post {numero}<hr></hr></div>)}else{

    return <div><hr></hr><button onClick={()=>setContador(contador+1)}>Clicks {contador}</button> Post {numero}{JSON.stringify(data)}<hr></hr></div>
    }
}