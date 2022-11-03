import {useQuery} from "react-query"
import axios from "axios"

function getProductos(){
    return axios.get('http://localhost:8080/sql?sql=select * from products')
}

export function Productos(){
    const {data:productos,isLoading}=useQuery(["productos"],getProductos)
    
    if(isLoading){
        return <div>cargando...</div>
    }
   
    return(
    // <div>{JSON.stringify(productos)}</div>
    <table className="table">
        <thead>
        <tr>
            
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
        </tr>
        </thead>
        <tbody>
            {productos.data.map(productos =>(
                <tr key={productos.product_id}>
                    <td>{productos.product_id}</td>
                    <td>{productos.product_name}</td>
                    <td>{productos.unit_price}</td>
                </tr>
            ))}
        </tbody>
     </table>
    )
}

