import React from "react";
import { ethers, BrowserProvider, formatEther } from "ethers"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const {ethereum} = window
export function Balance(){
    const { register, handleSubmit  } = useForm()
    const [cuenta, setCuenta] = useState(null)
    const [balance, setBalance] = useState(null)
    const [ ok, setOk  ] = useState(null)
    const [ ko, setKo  ] = useState(null)
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
            const provider = new BrowserProvider(window.ethereum, "sepolia");
            provider.getBalance(cuenta).then( balance => {
            //esto esta formatEther desactualizado en el video REACT I BALANCE ETH
            setBalance(formatEther(balance))

            })
        }

    }, [cuenta])
    // en get Balance 
    
    async function submit(data){
        setKo(null)
        setOk(null)
        const parameteros = {
            from: cuenta,
            to: data.address,
            value: ethers.parseEther(data.amount).toString()
        }
        console.log(parameteros)
        try {
            const txHash = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [parameteros]
            })
            setOk(txHash)
        } catch (error){
            console.log(error)
            setKo("algo salio mal")

        }
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
            <form className="form-inline" onSubmit={handleSubmit(submit)}>
                <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input id="address" defaultValue="0xbE850fd2cE899C70a9355b1D06f6a7f51940f6B6" className="form-control" {...register("address")}/>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="amount">Amount</label>
                    <input id="amount"  defaultValue={"0.00012"}  className="form-control" {...register("amount")}/>
                </div>

            <button type="submit" className="btn btn-primary mb-3"  >Send</button>
            </form>
            { ok && <div  className="alert alert-info m-3" >{ok}</div> }
            { ko && <div  className="alert alert-danger m-3" >{ko}</div> }
            
        </div>
    )
}