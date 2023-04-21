import Footer from "../components/Footer";
import Header from "../components/Header";

import Mala from "../assets/imagens/mala.jpg"

function Home() {
    return (
        <div>
            <main>
                <div className="flex items-center my-7">
                    <div className="w-1/2 flex justify-center">
                        <img src={Mala} className="w-3/5" alt="" />
                    </div>
                    <div className="text-center w-2/5 mr-20">
                        <h2 className="text-4xl font-bold text-slate-600 mb-10">Encontre aqui a viagem dos seus sonhos!!</h2>
                        <p className="text-xl mb-5 font-medium text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis, accusamus laudantium error neque tempore ratione a eos aliquam. Voluptatibus esse vero praesentium sit sint? Dolor modi facere fugiat consectetur.*</p>
                    </div>
                </div>
            </main>


        </div>
        
    )
}

export default Home;