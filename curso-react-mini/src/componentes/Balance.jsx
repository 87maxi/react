import { ethers, BrowserProvider, formatEther } from "ethers"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const {ethereum} = window
export function Balance(){
    const { register, handleOnSubmit } = useForm()
    const [cuenta, setCuenta] = useState(null)
    const [balance, setBalance] = useState(null)
    useEffect(() => {
        // llamada a metamask
        ethereum && ethereum.request( {method: 'eth_requestAccounts'}).then(cuenta => {
            
            setCuenta(cuenta[0])
            ethereum.on('accountsChanged', (i) => {
                setCuenta(i[0])
            })
        
        })
            
        }, [])

    // get Balance  eto se ejecuta cuando hay un cambio 
    useEffect( () => {

        if(cuenta){
            //esto esta desactualizado en el video REACT I BALANCE ETH
            const provider = new BrowserProvider(window.ethereum);
            provider.getBalance(cuenta).then( balance => {
            //esto esta formatEther desactualizado en el video REACT I BALANCE ETH
            setBalance(formatEther(balance))

            })
        }

    }, [cuenta])
    // en get Balance 
    
    function submit(data){
        console.log(data);
    }

    if (!ethereum){
        return <div>No esta el metamask</div>
    }
    

    return (
        <div>
            <p> Cuenta
            { cuenta ? cuenta : 'cargando ....' }
            </p>
            <p> Saldo
                { balance ? balance : 'cargando  balance....' }
            </p>
            <form className="form-inline" onSubmit={handleOnSubmit(submit)}>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input id="address" className="form-control" {...register("address")}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" className="form-control" {...register("amount")}/>
                </div>

            <button type="submit" className="btn btn-primary mb-3"  >Send</button>
            </form>
        </div>
    )
}