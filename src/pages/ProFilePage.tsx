import { Link } from 'react-router-dom';
import LogoImage from '../assets/Logo.png';

const ProFilePage = () => {
    return (
        <div className="relative">
            <section className='absolute left-0 top-0 h-screen w-[320px] bg-[#D9D9D9]'>
                <nav className='pt-[30px] px-[34px]'>
                    <Link to="/" className='flex justify-center'><img src={LogoImage} className='w-[49px] h-[35px] mb-10' alt="Logo" /></Link>
                    <Link to="#" className='block text-[#212353] text-[20px] font-[400]'>Post</Link>
                    <Link to="#" className='block text-[#212353] text-[20px] font-[400]'>Logout</Link>
                </nav>
            </section>
        </div>
    )
}

export default ProFilePage
