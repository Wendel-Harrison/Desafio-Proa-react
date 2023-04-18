function Newsletter() {
    return (
        <div className="flex bg-gray-200 py-5 items-center justify-around">
            <div className="w-52 ml-32 mr-14">
                <h4 className="font-normal text-slate-800 uppercase text-xl mb-1">Inscreva-se</h4>
                <p className="font-normal text-slate-700 uppercase text-xs">E receba novidades e promoções</p>
            </div>

            <div className="flex gap-5 w2/3 mr-40 ">
                <input className="w-[450px] py-3.5 placeholder:text-black px-5 rounded-full text-xs border border-gray-400 outline-none" placeholder="Seu e-mail" type="text" />
                <button className=" w-56 uppercase font-normal text-xs bg-[#98b020] text-white hover:bg-opacity-90 transition-all duration-500 py-2 px-5 rounded-full">Assinar newsletter</button>
            </div>
        </div>
    )
}

export default Newsletter;