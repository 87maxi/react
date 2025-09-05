function Login (props) {

    return (
        <>
            <div>
                {props.sesion && <p>{props.sesion.usuario}</p>}
            </div>
            <div>
                {props.sesion.usuario2 ?  <p>{props.sesion.usuario2}</p> : <p> Ir al login</p> }
            </div>
        </>
    );


}


export default Login