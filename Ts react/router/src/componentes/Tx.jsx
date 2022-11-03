import { useMutation } from "react-query"
export function Tx(){
    const mutation=useMutation(()=>{
        console.log("he ejhecutado la funcion")
        console.log(JSON.stringify(mutation))
    })
    const {mutate:m1, isLoading:isl2,isError:isE2}=useMutation(() =>{
        console.log("otra mutacion")
    })
    return <div>
        <button onClick={() =>mutate()}>Llamar</button>
    </div>
}