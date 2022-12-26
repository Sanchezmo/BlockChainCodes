import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter, Outlet} from 'react-router-dom' 
import { Productos } from '../componentes/Productos'
import { Home } from '../componentes/home'
import { Cesta } from '../componentes/Cesta'
import { Producto } from '../componentes/Producto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path='/' element={<Home/>}>
        <Route path='productos' element={<Productos/>}/>
        <Route path='cesta' element={<Cesta/>}/>
        <Route path='productos/:codigo' element={<Producto/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
