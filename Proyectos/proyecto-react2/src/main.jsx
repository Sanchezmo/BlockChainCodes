import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Componente1 } from './Componente1'
import { Array1 } from './Array'
import { Sesion } from './Sesion'
import { Boton } from './Boton'
import { Efecto } from './Efecto'
//import { useState } from 'react' 
const Componente2 = ()=>{
  return (  <p>ADIOS<Componente1 parametro1={"PUTO"} parametro2={"MAGO"+" "+2}></Componente1></p>)
    
}

ReactDOM.createRoot(document.getElementById('root')).render(
<>
 <Componente1 parametro1={"PUTO"} parametro2={"MAGO"}></Componente1>
 <Componente2></Componente2>
 <Array1></Array1>
 <Sesion></Sesion>
 <Boton></Boton>
 <Efecto numero={1}></Efecto>
 <Efecto numero={2}></Efecto>
 <Efecto numero={3}></Efecto>
 <Efecto numero={4}></Efecto>
</>
)
