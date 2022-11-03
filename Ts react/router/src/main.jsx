import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Home} from './componentes/Home'
import { Lista } from "./componentes/Lista";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import{QueryClient,QueryClientProvider}from 'react-query'
import { Tx } from './componentes/Tx'

const queryClient= new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route index element={<h2>Home principal</h2>}></Route>
        <Route path="productos" element={<p>Hola producto</p>}></Route>
        <Route path="clientes" element={<p>Hola cliente</p>}></Route>
        <Route path="lista" element={<Lista/>}></Route>
        <Route path="transacion" element={<Tx/>}></Route>
        <Route path="*" element={<p>ruta no valida</p>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
  
)
