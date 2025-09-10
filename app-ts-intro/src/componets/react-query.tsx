import React from "react";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";


interface IQueryProps{
    id: number
}


const queyClient = new QueryClient()


const QueryData: React.FC<IQueryProps> = ({id}) => {
    const { isLoading,  data} = useQuery( [ "post" ] , async () => {
        const datos = (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
        return datos
    })

    if (isLoading) return <p>Esta cargando</p>

    return <div>{JSON.stringify(data)}</div>

}



const Query: React.FC = () => {

    return (
        <QueryClientProvider client={queyClient} >
         <QueryData id={10} />
        </QueryClientProvider>
    )


}



export default Query;