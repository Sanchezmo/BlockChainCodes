import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider,QueryClient,useQuery} from 'react-query' 
import {Routes,BrowserRouter,Route,Link,Outlet} from 'react-router-dom'
interface IAppProps{
  id:number
}
const App: React.FC<IAppProps> = ({id}) =>{
  const {data,isLoading}=useQuery(["post"], async() =>{
    const datos = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
    return datos
  })
  if (isLoading) return <p>Esta cargando</p>
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
 )
}
//implementation of the queryClient <App id={10}></App>
const queryClient= new QueryClient()

const Layout = ()=>{
  return (<>
    <div>
      <p><Link to="/app">| App | </Link>
      <Link to="/aboutus">About Us | </Link>
     <Link to="/servicios">Servicios| </Link>
     <Link to="/contacto">Contacto |</Link></p>
    </div>
    <div>
      <Outlet></Outlet>
    </div>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
 <QueryClientProvider client={queryClient}>
  <Routes>
    <Route path="/" element={<Layout></Layout>}>
     <Route path="*" element={"pagina no encontrada error 404"}/>
     <Route path="/app" element={<App id={10}></App>}/>
     <Route path="/contacto" element={"Contacto"}/>
     <Route path="/aboutus" element={"sobre nosotros"}/>
     <Route path="/servicios" element={"Servicios"}/>
    </Route>
  </Routes>
    </QueryClientProvider>
 </BrowserRouter>
)
