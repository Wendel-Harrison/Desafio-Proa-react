import React from 'react'
import CanyonImg from "../assets/imagens/GrandCanyon.jpg"
import Details from '../components/Details'

function Canyon() {
  return (
    <div className={`bg-canyon w-full h-[550px] bg-cover pt-14 `}>
    
        <Details 
          title="Grand Canyon"
          
          details="O Grand Canyon fica no estado do Arizona e é cortado pelo não tão timido assim Rio Colorado, e forma uma paisagem mais inponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é um dos passeios mais procurados por quem visita Las Vegas, que fica no estado vizinho, Nevada"
        />
    </div>
  )
}

export default Canyon