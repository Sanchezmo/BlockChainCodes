
export interface IHeaderProps{
    nombre:string
    dir:string
}
export function Header({nombre, dir}:IHeaderProps){
   
     return  <>
      <h1>{nombre}</h1>
      <h1>{dir}</h1>
      
      </>

    
}