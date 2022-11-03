import React from "react";
import {useForm} from "react-hook-form"

export function Formulario(){
    const {register,handleSubmit,watch, formState:{errors}} =useForm();
    const onSubmit =data => console.log(data);
    console.log(watch("example"));
    return{

        <form onSubmit={handleSubmit{onSubmit}}>
            <input defaultValue="test" {...register{"example"}}/>

    }
}