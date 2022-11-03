import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./componentes/Home"
import { Productos } from './componentes/Productos'
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient= new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/balance' element={<h1>Balance</h1>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
  
)
