import { useQuery } from "react-query"
import axios, { Axios } from "axios"

function getProductos(){
   return  axios.get('http://localhost:8080/sql?sql=select * from productos')
}



export function Producto(){
    const { data: productos, isLoading } = useQuery(['productos'],  getProductos )
    if (isLoading){
        return <div> Cargando ...</div>
    }

    return (
        
        <table className="table" >
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {productos.data.map(productos =>
                    <tr key={productos.product_id} >
                        <td>{productos.product_id}</td>
                        <td>{productos.product_name}</td>
                        <td className="text-end">{productos.unit_price}</td>
                    </tr>
                )}

            </tbody>
        </table>
    
    )
}