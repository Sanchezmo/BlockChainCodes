import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider,QueryClient,useQuery} from 'react-query' 
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
//implementation of the queryClient
const queryClient= new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <QueryClientProvider client={queryClient}>
 <App id={10}></App>
 </QueryClientProvider>
)
