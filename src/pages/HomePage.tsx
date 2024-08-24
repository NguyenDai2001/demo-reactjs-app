
import "../css/homePage.scss";
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useState } from "react";
import LogoImage from '../assets/Logo.png';
import image1 from '../assets/image1 1.png';

const HomePage = () => {
    const [buttonSignIn] = useState<boolean>(false)

    const handldeClick = () => {
    }


    return (
        <>
            <section className='wrapper relative h-[685.71px]  mt-[48px] bg-orange-300 '>
                <header className="flex justify-between h-[59.63px] items-center">
                    <Link to="/"><img src={LogoImage} className="w-[48.7px] h-[34.78px]" alt="Logo" /></Link>

                    {buttonSignIn &&
                        <div className="bg-orange-100 flex justify-between w-[450px] ">
                            <Button label='Profile' setClassName="" onClick={handldeClick} />
                            <Button label='Logout' setClassName="" onClick={handldeClick} />
                        </div>
                    }
                    {!buttonSignIn &&
                        <Button label='Sign In' setClassName="" onClick={handldeClick} />
                    }
                </header>



                <img src={image1} className="absolute bottom-0 right-0 w-[759.25px] h-[401.49px]" alt="image1" />
                <div className="absolute w-[640.99px] bottom-[50px]">
                    <h1 className="text-[80px] text-textTitleColor font-[700] leading-[88px] ">Save your data storage here.</h1>
                    <p>Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                    <Button label='Learn more' setClassName="w-[168.94px]" onClick={handldeClick} />
                </div>






            </section>

        </>
    )
}

export default HomePage
