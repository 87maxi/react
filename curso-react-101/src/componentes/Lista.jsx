
function Lista ( props ){
    return ( 
        <>
        <div> 
            <ul>
                { props.a.map(( item, index  ) => <li key={index}>{item}</li>  ) }
            </ul>
        </div>
        </>
    )

} 
export default Lista;