import { Link } from "react-router-dom"

export function Header(){
    return <div> <ul>
    <li><Link to="/productos">Productos</Link></li>
    <li><Link to="/clientes">Clientes</Link></li>
    <li><Link to="/lista">Lista</Link></li>
    <li><Link to="/transacion">Transacion</Link></li>
    </ul>
    </div>
}