export function Sesion(){
    const sesion ={usuario:"nombre",apellido:null,color:"azul",forma:null}
    //objeto && muestra si existe
    //{sesion ? cierto: false}
    return(
        <div>
            {sesion && <p>{sesion.color}</p>}
            {sesion && <p>{sesion.forma}</p>}
            {sesion.usuario ? <p>{sesion.usuario}</p>: <p>Ir login</p>}
            {sesion.apellido ? <p>{sesion.apellido}</p>: <p>Ir login</p>}
        </div>
    )
}