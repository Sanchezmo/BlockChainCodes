import React from "react";
import { Outlet , Link } from "react-router-dom";
import { Context } from "../src/main";

export function Cesta(){
    const [estado,setEstado] = useContext(Context);
    return (
    <div>
       <table className="table">
        <thead>
            <tr>
            <th scope="col">NOmbre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            {estado.cesta.map(item=>(
                <tr key={item.producto.ProductID}>
                    <td>{item.producto.ProductName}</td>
                    <td>{item.producto.UnitPrice}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.producto.UnitPrice * item.cantidad}</td>
                </tr>

            ))}
        </tbody>
       </table>
    </div>
    )
}