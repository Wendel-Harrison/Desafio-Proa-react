import Logo from '../assets/imagens/viagens.jpg'
import { Link } from "react-router-dom"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className='flex justify-center gap-14 items-center'>
            <Link to='/aa'><img src={Logo} className='w-20' /></Link>

            <ul className='flex justify-center gap-14 items-center'>
                <li className='font-bold hover:scale-110 transition duration-300 text-slate-600 hover:text-slate-900'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='font-bold hover:scale-110 transition duration-300 text-slate-600 hover:text-slate-900'>
                <Link to='/canyon' >Grand Canyon</Link>
                </li>
                <li className='font-bold hover:scale-110 transition duration-300 text-slate-600 hover:text-slate-900'>
                <Link to='/escocia'>Escócia</Link>
                </li>
                <li className="font-bold hover:scale-110 transition duration-300 text-slate-600 hover:text-slate-900">
                <Link to='/china'>Muralhas da China</Link>
                </li>
                <li className="font-bold hover:scale-110 transition duration-300 text-slate-600 hover:text-slate-900">
                <Link to='/aruba'>Aruba</Link>
                </li>
            </ul>

            <input type='text'className='border'  />

            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4' />
        </div>
    )
}

export default Header;