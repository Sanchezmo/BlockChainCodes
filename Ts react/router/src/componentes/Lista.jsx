import { useQuery } from "react-query"
export function Lista(){

   const {data, isLoading, isError} = useQuery(["query1"],()=>{
        return[1,2,3,4,5,6]
    })
    if(isError)
        return <div>Error</div>
    return <div>
        <ul>
            <li><p>{JSON.stringify(data)}</p></li>
            {
                data && data.map((item,index) =>
                    <li key={index} > {item}</li>
                )
            }
        </ul>
        </div>
}