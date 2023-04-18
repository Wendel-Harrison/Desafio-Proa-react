import Logo from '../assets/logo.webp';
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Github from '../assets/github.svg'
import Twitter from '../assets/twitter.svg'
import Youtube from '../assets/youtube.svg'
import Pix from '../assets/pix.webp'


function Footer () {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-col w-1/5 ml-20'>
                <img src={Logo} className=' py-5 border-b' />
                <div className='flex gap-5 mt-5 m-auto mb-10'>
                    <img src={Instagram} className='w-10 rounded-full border p-2' />
                    <img src={Facebook} className='w-10 rounded-full border p-2' />
                    <img src={Github} className='w-10 rounded-full border p-2' />
                    <img src={Twitter} className='w-10 rounded-full border p-2' />
                    <img src={Youtube} className='w-10 rounded-full border p-2' />

                </div>
            </div>

            <div className='mr-32'>
                <h2 className='text-2xl font-medium mb-3 text-center'>Formas de pagamento:</h2>

                <div className='flex gap-3 '>
                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Master___d6d3e218475c698aea973d6769131556.png" />

                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Visa___5a79be7503222d4f301704d18617bf9c.png" />

                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Diners___0bc0f6a1ecf82764a1ee09288c188aa0.png" />

                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Elo___a2d768f67af865a10c3fb739dc742658.png" />

                    <img src="https://phytoterapica.vtexassets.com/assets/vtex/assets-builder/phytoterapica.tema-phytoterapica/4.0.24/imgs/Hiper___658b71e8411115a860ee510afe937605.png" />

                    <img src={Pix} />





                </div>
            </div>
        </div>
    )
}

export default Footer;