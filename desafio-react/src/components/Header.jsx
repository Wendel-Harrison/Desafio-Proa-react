import Logo from '../assets/logo.webp';
import Login from '../assets/user-solid.svg';
import Cart from '../assets/cart.svg';
import Lupa from '../assets/lupa.svg';
import Percent from '../assets/percent.svg';



function Header() {
    return (
        <div className="flex justify-between items-center  border-y py-6">
            <div>
                <img src={Logo} alt="Logo" className='w-72 ml-16' />
            </div>

            <div className='flex gap-8'>
                <div className='flex items-center'>
                    <img src={Lupa} className='w-4 h-4 mr-[-30px] relative z-10 cursor-pointer opacity-50' />
                    <input type='text' placeholder='O que você procura?' className='rounded-2xl border pl-12 py-1.5 w-56 placeholder:text-slate-900 text-sm bg-transparent z-0 relative' />
                </div>

                <div className='flex items-center'>
                    <input type='text' placeholder='-5% na primeira compra' className='rounded-2xl border px-8 w-56 py-2 uppercase placeholder:text-slate-900 text-xs hover:bg-[#98b020] hover:placeholder:text-white transition-all duration-300' />
                    <img src={Percent} className='w-6 h-6 ml-[-29px] relative z-10 cursor-pointer opacity-50 rounded-full p-1 bg-gray-100 invert hover:invert-0' />
                </div>

                <img src={Login} alt="" className='w-6'/>
                <img src={Cart} alt="" className='w-6 mr-16'/>
            </div>
        </div>
    )
}

export default Header;