import Logo from '../assets/imagens/viagens.jpg';

function Header() {
    return (
        <div className='flex justify-around'>
            <img src={Logo} />

            <p>Home</p>
            <p>Grand Canyon</p>
            <p>Escócia</p>
            <p>Muralhas da China</p>
            <p>Aruba</p>

            <input type='text'className='' />
        </div>
    )
}

export default Header;