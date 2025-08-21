import { useMutation } from "react-query"


export function Tx () {
    
    const { mutate,  isLoading,  isError  } = useMutation(() => {
        console.log("he ejecutado la funcion")
        //console.log(JSON.stringify(mutation))
    });


    const { mutate:m2 ,  isLoading:isLoading2,  isError:isError2  } = useMutation(() => {
        console.log("he ejecutado la funcion")
        //console.log(JSON.stringify(mutation))
    });

    const  function3 =  useMutation(() => {
        console.log("he ejecutado la funcion 3")
        //console.log(JSON.stringify(mutation))
    });



    return <div>
            <button  onClick={() => mutate() } > LLammar </button>
            <br/>
            <button  onClick={() => function3.mutate() } > LLammar a funcion 3 </button>
        </div>
    
 

}

/*
"
{
    "error": null,
    "failureCount": 0,
    "isPaused": false,
    "status": "success",
    "isLoading": false,
    "isSuccess": true,
    "isError": false,
    "isIdle": false
}

"
*/