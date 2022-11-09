import { useState } from "react";
export function Boton(){
    const[likes,setLikes]= useState(0);
   
    function incre() {

        
        setLikes(likes+1);

    }
   
    return <button onClick={()=>incre()}>LIkes {likes}</button> 

    
}