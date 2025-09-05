import { useState } from "react";

const useContador = (numero) => {
    const[c, setC] = useState(numero)
    const incrementar = () => setC( c +  1 )
    const decrmentar = () => setC( c - 1 )
    const reset = () => setC(numero)

    return{
        contador : c,
        incrementar,
        decrmentar,
        reset
    }
}




function HooksCustom() {

    const {  contador, incrementar, decrmentar, reset } = useContador(10)
    const {  contador : contador1, incrementar: inc1, decrmentar : dec1, reset : reset1 } = useContador(20)

        return ( 
            <>
                <div>
                    {contador}
                    <button  onClick={() => incrementar()} > Incrementar </button>
                    <button  onClick={() => decrmentar()} > Decrmentar </button>
                    <button onClick={() => reset() } >Reset</button>
                </div>

                <div>
                    {contador1}
                    <button  onClick={() => inc1()} > Incrementar </button>
                    <button  onClick={() => dec1()} > Decrmentar </button>
                    <button onClick={() => reset1() } >Reset</button>
                </div>

            </>
        )

}


export default HooksCustom;