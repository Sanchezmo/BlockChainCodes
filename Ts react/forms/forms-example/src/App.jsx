import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useForm} from "react-hook-form"
import { useEffect } from 'react';
function App() {
  const {register,handleSubmit,getValues,setValue,watch,formState:{errors}}= useForm(); 
  


  function onSubmit(data){
    console.log(data)
  }
 useEffect(() =>{console.log(getValues())},[watch(getValues())])

 useEffect(() =>{console.log("ha cambiado el campo2")},[watch("campo2")])

 const onChange=(e)=>{
  setValue("campo3",e.target.value)
 }
  return (
    <div className="App">
       <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("campo1",{onChange:(e)=>onChange(e)})}/><br></br>
        <input {...register("campo2",{required:true})}/><br></br>
        <input {...register("campo3")}/><br></br>
        {errors.campo2 && <span>El campo es obligatorio</span>}
        <input type="submit" />
       </form>
    </div>
  )
}

export default App
