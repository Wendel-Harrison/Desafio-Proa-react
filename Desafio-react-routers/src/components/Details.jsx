import React from 'react'
import Logo from "../assets/imagens/viagens.jpg"

const Details = (props) => {
  return (
    <div className='
    w-[450px]
    bg-white
    bg-opacity-50 
    backdrop-blur-sm
    rounded-3xl
    ml-[40%]
    pb-3
    '>
        <h2 className='text-center w-[90%] m-auto text-3xl font-bold text-slate-800 py-5'>Venha explorar esse lugar incrivel {props.title}!!</h2>
        <p className='w-[95%] text-center m-auto my-5 text-lg font-medium text-slate-800'>{props.details}</p>
        <img src={Logo} className='w-14 m-auto rounded-full' />
    </div>
  )
}

export default Details