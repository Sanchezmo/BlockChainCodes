import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient,QueryClientProvider, useQuery} from 'react-query'
import{Router,Route, BrowserRouter, Routes, Outlet} from 'react-router-dom'
const queryClient = new QueryClient()
function Home(){
  return <div>
    Home
    <Outlet></Outlet>
  </div>
}
async function getCustomer(){
  const response = await fetch("http://localhost:3000/customers")
}
function Customers(){
  const {data,isLoading,error} = useQuery("customers",getCustomer())
  if(isLoading) return <div>Cargando</div>
  return <div><p>customers:</p><br></br>{JSON.stringify(data,null,4)}
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>NOMBRE</th>
        <th>CITY</th>
      </tr>
    </thead>
    <tbody className='table'>
      {
      data.map((item,index) =><tr key= {index}>
        <td>{item.customer_id}</td>
        <td>{item.company_name}</td>
        <td>{item.city}</td>
      </tr>)
      }
    </tbody>
  </table>
  </div>
}
function App(){
<QueryClientProvider client={queryClient}>
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>}></Route>
       <Route path="customers" element={<Customers/>}></Route>
      
    </Routes>
  </BrowserRouter>
</QueryClientProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  
)
