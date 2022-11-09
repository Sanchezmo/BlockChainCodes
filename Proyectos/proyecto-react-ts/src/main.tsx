import React, { memo, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { useState,useEffect } from 'react'
import './index.css'
//intefacesssssssssssss
interface Iregistro{
  id: string
  nombre: string
}
interface IListaProps{
  registros: Iregistro[]
  deleteReg: (id:string)=> void
}
interface ItemProps{
  item: Iregistro
  deleteReg: (id:string)=> void
}
//intefacesssssssssssss
const ValoresIniciales: Iregistro[]=[
  {
    id: '1',
    nombre: 'producto1',
  },
  {
    id: '2',
    nombre: 'producto2',
  }
]

const Item: React.FC<ItemProps> =memo(({item, deleteReg})=>{
  useEffect(() => {
    console.log('item:', item)  }, [])
return(
  <li>{item.id} {item.nombre}<button onClick={()=>deleteReg(item.id)}>Delete</button></li>)
})

const Lista: React.FC<IListaProps>= memo(({registros,deleteReg}) => {
  return (
   
      <ul>
       {
        registros.map((item:Iregistro, index:number) => 
        <Item key={index}deleteReg={deleteReg}item={item}></Item>)
        }
        
      </ul>
   
  )
})
const App=() => {
  const [productos, setProductos]= useState<Iregistro[]>(ValoresIniciales);
  const [texto, setTexto] = useState<string>("")
  const addRegistro=() => {
    const nuevo:Iregistro={
      id: new Date().getTime().toString(),
      nombre: texto,
    }
    setProductos([...productos,nuevo])
  }
  const deleteReg= useCallback((id:string)=>{
    setProductos(productos.filter(item=>item.id !=id))
  },[productos])
  return (
    <div>
      <input type="text" id="texto" placeholder="introduzca producto" value={texto} onChange={(e)=> setTexto(e.target.value)}></input>
      <button onClick={()=>addRegistro()}>Añadir</button>
      <Lista registros={productos} deleteReg={deleteReg}/>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <App></App>
)
