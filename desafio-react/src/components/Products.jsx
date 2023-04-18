import Oleo from "../assets/oleo-essencial-bergamota-5ml-phytoterapica-02.webp"

import ImageHover from "./imageHover";


function Products(props) {
    

    return (
        <div className="flex flex-col">
            <div className="">
                <ImageHover primaryImage={props.img} secondaryImage={props.url}/>
            </div>
            <div>
                <h2 className="w-[85%] text-sm font-semibold mb-2">{props.title}</h2>
                <h3 className="text-slate-800 font-light text line-through">{props.antValue}</h3>
                <div className="flex mt-[-5PX]">
                <h3 className="text-[#98b020] font-semibold">{props.value}</h3>
                <h3 className="bg-[#98b020] text-white font-normal ml-3 rounded-lg ">{props.promo}</h3>
                </div>
                <p className="text-sm text-slate-500">{props.description}</p>
            </div>

        </div>
    )
}

export default Products;