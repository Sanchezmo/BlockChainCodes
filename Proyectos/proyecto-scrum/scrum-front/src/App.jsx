import { useState } from 'react'
import React from "react";
import {useForm} from "react-hook-form"

function onSubmit(data){
  
}

export function App() {
  const [count, setCount] = useState(0)
  const {register, handleSubmit,watch,formState:{errors}} = useForm();
  const onSubmit = data => console.log(data);

  
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"></input>
        <input type="text"></input>
        <input {...register}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}


