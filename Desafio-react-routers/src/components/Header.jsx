import Logo from '../assets/imagens/viagens.jpg'
import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className='flex justify-center gap-14 items-center'>
            <img src={Logo} className='w-20' />

            <Link to=".." relative="path">Home</Link>
            <p>Grand Canyon</p>
            <p>Escócia</p>
            <p>Muralhas da China</p>
            <p>Aruba</p>

            <input type='text'className='border'  />

            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4' />
        </div>
    )
}

export default Header;