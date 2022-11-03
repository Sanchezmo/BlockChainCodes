import { Link, Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Home(){
    return <div>
       <Header></Header>
        <Outlet></Outlet>
        
    </div>
}