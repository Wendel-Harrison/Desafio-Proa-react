import Logo from '../assets/imagens/viagens.jpg'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className='flex justify-center gap-14 items-center'>
            <img src={Logo} className='w-20' />

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>

            <input type='text'className='border'  />

            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4' />
        </div>
    )
}

export default Header;