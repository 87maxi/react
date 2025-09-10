import { memo,  useCallback,  useEffect, useState } from "react";



interface IRegistro {
  id : string
  nombre: string
}

interface IITemProps {
  item : IRegistro,
  deleteRegistro: (id:string) => void
}

interface IListaProps {
  registros : IRegistro,
  deleteRegistro: (id:string) => void
}


// la funcion memo la utilidad que cumple es evitar que se el compnente no cambia no renderice nuevamete

const Item: React.FC<IITemProps> = memo (({ item, deleteRegistro }) =>  { 
 useEffect(() => {
    console.log("item", item )
 })

  return <li>{item.id } {item.nombre}  <button onClick={() => deleteRegistro(item.id)} >Delete</button>  </li>
})



const Lista: React.FC<IListaProps> = memo(({registros, deleteRegistro}) => {
  useEffect(() => {
    console.log("lista")
 })
  return <ul>
    {
      registros.map((item:IRegistro, index:number)  => 
      
        <Item  key={index} deleteRegistro={deleteRegistro} item={item} ></Item>
      
      )
    }
  </ul>
})

const valoresIniciales: IRegistro[] = [

  {
    id: "1",
    nombre: "producto 1",
  },
   {
    id: "2",
    nombre: "producto 2",
  }

]


const Listado = () => {
  const [ texto, setTexto ] = useState("")
  const [productos, setProductos] = useState<IRegistro[]>(valoresIniciales)
  useEffect(() => {
    console.log("App")
 })

  const addRegistro = () => {
    const nuevo : IRegistro = {
      id: new Date().getTime().toString(),
      nombre: texto
    }
    setProductos([...productos, nuevo])
  }

  const deleteRegistro = useCallback( ( id: string ) => {
    setProductos( productos.filter( item => item.id != id ) )
  }, [productos]  )


  return (
     
    <div>
      <input type="text" value={texto}  onChange={( e )  => setTexto(e.target.value) } ></input>
      <button  onClick={() => addRegistro()} >ADD</button>
      <Lista registros={productos}  deleteRegistro={deleteRegistro}/>
    </div>
    
  )
}


export default Listado;