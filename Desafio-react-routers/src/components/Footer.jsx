import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';





function Footer() {
    return (
        <div className="bg-[#666]">
            <h1 className="text-white text-center font-medium py-5 ">Siga-nos em nossas redes sociais</h1>
            <div className='flex justify-center items-center gap-20'>
                <AiFillInstagram className='text-white text-4xl' />
                <AiFillFacebook className='text-white text-4xl' />
                <FaTiktok className='text-white text-4xl' />
                <FaWhatsapp className='text-white text-4xl' />
            </div>
            <p className='text-center text-white mt-5 pb-7'>Telefone para contato: (11) 97739-6401</p>


            
        </div>
    )
}

export default Footer;