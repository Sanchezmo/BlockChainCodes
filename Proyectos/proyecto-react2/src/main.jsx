import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Componente1 } from './Componente1'
import { Array1 } from './Array'
import { Sesion } from './Sesion'
import { Boton } from './Boton'
import { Efecto } from './Efecto'
import { Hook } from './Hook'
import { createContext } from 'react'
import { useState,useContext } from 'react' 
//componente 2 para implementar parametros en componente 1.
const Componente2 = ()=>{return (  <p>ADIOS<Componente1 parametro1={"PUTO"} parametro2={"MAGO"+" "+2}></Componente1></p>)}
//implementacion de global context
const GlobalContext =createContext()
const AppGlobal= ({Children})=>{
  const [state, setState] = useState({
    usuario: "usuario1"
  })
  return (
    <GlobalContext.Provider value={[state,setState]}>
      {Children}
      <Componente1 parametro1={"PUTO"} parametro2={"MAGO"}></Componente1>
      <Componente2></Componente2>
      <Array1></Array1>
      <Sesion></Sesion>
      <Boton></Boton>
      <Efecto numero={1}></Efecto>
      <Efecto numero={2}></Efecto>
      <Efecto numero={3}></Efecto>
      <Efecto numero={4}></Efecto>
      <Hook></Hook>
      <Hijo></Hijo>
      
    </GlobalContext.Provider>
  )
}//implementacion de global context

//Ejemplo Hijos para AppGlobal
const Hijo = ()=> {
  const [context, setContext] = useContext(GlobalContext)
  return (
    <div><hr></hr>
      Variable global rescatada: {context.usuario}
      <Nieto></Nieto>
    </div>
  )
}
const Nieto = ()=> {
  const [context, setContext] = useContext(GlobalContext)
  const cambiar =()=> {
    setContext({...context,usuario: "usuario cambiado"})
  }
  return (
    <div><hr></hr>
      Variable global rescatada 2: {context.usuario}
      <button onClick={()=>{cambiar()}}>Cambiar Usuario</button>
    </div>
  )
}
//ejemplo Hijos para AppGlobal
ReactDOM.createRoot(document.getElementById('root')).render(
<>
 <AppGlobal></AppGlobal>
</>
)
