import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from 'react-hook-form'
import './App.css'

//documentacion de la libreria https://react-hook-form.com/

function App() {

   // con watch se ejecuta cada vez que cambia algo en el formulario
   const {register, handleSubmit, watch, getValues, formState:{errors}, setValue } = useForm();

    function onSubmit(data){
      console.log("onSubmit", data);
    }

    useEffect( () =>{} ,

          console.log( "los valores actuales son", getValues()),
          [watch(getValues())],
    )

    useEffect( () =>{} ,

          console.log("ha cambiado el campo 2"),
          [watch("campo2")],
    )

    const onBlur = (e) => {
      setValue("campo3", e.target.value )
    }

    const onChange = (e) => {
      setValue("campo3", e.target.value )
    }

  return (
    <>
      <div className='App' >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*<input {...register("campo1", {onBlur:(e) => onBlur(e) })} /> <br/>*/}
          <input {...register("campo1", {onChange:(e) => onChange(e) })} /> <br/>
          <input {...register("campo2", {required:true})} /><br/>
          <input {...register("campo3")} /><br/>
          {errors.campo2 && <span>el campo es requerido</span>} 
          <input type="submit" />
        </form>
        {JSON.stringify(getValues())}
      </div>
      
    </>
  )
}

export default App
