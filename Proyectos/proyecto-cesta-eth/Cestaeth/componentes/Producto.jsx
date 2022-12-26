import React from "react";
import { useParams } from "react-router-dom";

export function Producto(){
    const params = useParams()
    return (
    <div>
        Producto {params.codigo}
    </div>
    )
}