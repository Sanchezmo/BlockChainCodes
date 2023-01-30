import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider,QueryClient } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cesta } from '/componentes/Cesta'
import { Home } from '/componentes/home'
import { Producto } from '/componentes/Producto'
import { Productos } from '/componentes/Productos'
import { Context } from 'react'
import { createContext } from 'react'

export const Context = createContext(null)

const queryClient = new QueryClient()

function App(){
  const [estado, setEstado]= React.useState({
    cesta: []
  })
  return <React.StrictMode>
    <Context.Provider value={[estado,setEstado]}>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
    </Context.Provider>
  </React.StrictMode>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
