import React from 'react'
import MalaError from '../assets/imagens/mala.png'

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[100vh]'>
        <h2 className='text-3xl mb-5 font-bold text-slate-800'> Erro 404 - Página não encontrada</h2>
        <img src={MalaError} className='w-2/4'/>
    </div>
  )
}

export default ErrorPage