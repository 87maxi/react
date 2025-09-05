import { useEffect, useState } from 'react'



function Post(props) {
    const [ data, setData  ] = useState(null)
    const [ c, setC ] = useState(1)
    
    useEffect( () => {
         fetch(`https://jsonplaceholder.typicode.com/posts/${c}`)
        .then(response => response.json())
        .then( data => setData(data) )
    }, [c])

    if(!data) return (
        <div>
            cargando el post {props.numero}
            <hr></hr>
        </div>
    )

    return(
        <div>
            <button onClick={() => setC(c+1)}>Sumar {c}</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            
        </div>
    )

}

export default Post