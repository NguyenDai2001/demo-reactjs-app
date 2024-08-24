
import "../css/homePage.scss";
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useState } from "react";
import LogoImage from '../assets/Logo.png';
import image1 from '../assets/image1 1.png';
import imgBG1 from '../assets/Rectangle1.png';
import imgBG2 from '../assets/Rectangle2.png';
import imgBG3 from '../assets/Rectangle3.png';
import imgBG4 from '../assets/Rectangle4.png';
import imgIcon1 from '../assets/image3 1.png';
import imgIcon2 from '../assets/image3 1.png';
import imgIcon3 from '../assets/image5 1.png';
import imgIcon4 from '../assets/image6 1.png';

const HomePage = () => {
    const [buttonSignIn] = useState<boolean>(false)

    const handldeClick = () => {
    }


    return (
        <>
            <section className='wrapper relative h-[685.71px]  mt-[48px] '>
                <header className="flex justify-between h-[59.63px] items-center">
                    <Link to="/"><img src={LogoImage} className="w-[48.7px] h-[34.78px]" alt="Logo" /></Link>

                    {buttonSignIn &&
                        <div className=" flex justify-between w-[450px] ">
                            <Button label='Profile' setClassName="" onClick={handldeClick} />
                            <Button label='Logout' setClassName="" onClick={handldeClick} />
                        </div>
                    }
                    {!buttonSignIn &&
                        <Button label='Sign In' setClassName="" onClick={handldeClick} />
                    }
                </header>
                <img src={image1} className="absolute bottom-0 right-0 w-[759.25px] h-[401.49px]" alt="image1" />
                <div className="absolute w-[640.99px] bottom-[50px] ">
                    <h1 className="text-[80px] text-textTitleColor font-[700] leading-[88px] my-[40px]">Save your data storage here.</h1>
                    <p className="text-textParaColor text-[18px] w-[377.64px] font-[500] leading-[28.8px]">Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                    <Button label='Learn more' setClassName="w-[168.94px] mt-[40px]" onClick={handldeClick} />
                </div>
            </section>

            <section className="wrapper">
                <div className="text-center mt-[100px] mb-[100px]">
                    <h1 className="text-[40px] font-[700] my-[30px]">Features</h1>
                    <p className="text-textParaColor inline-block text-[18px] w-[575.12px] font-[500] leading-[28.8px]">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
                </div>

                <div className="grid grid-cols-2 gap-0 ">
                    <div className="relative w-[523.21px] h-[382.1px]">
                        <img className="absolute top-1/3 left-0" src={imgIcon1} alt="features2" />
                        <img className="absolute right-0 bottom-0 z-10" src={imgBG1} alt="feateres1" />
                        <div className="absolute w-[216.66px] top-[100px] right-[40px]">
                            <h2 className="text-[24px] font-[400]">Search Data</h2>
                            <p className="text-[16px] font-[400] leading-[25.6px] my-[20px]">Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                            <Link to="#" className="flex items-center cursor-pointer z-20">Learn more  <i className="fa-solid fa-arrow-right ms-3"></i></Link>
                        </div>
                    </div>

                    <div className="relative w-[523.21px] h-[382.1px]">
                        <img className="absolute top-1/3 left-0" src={imgIcon2} alt="features2" />
                        <img className="absolute right-0 bottom-0 z-10" src={imgBG2} alt="feateres1" />
                        <div className="absolute w-[216.66px] top-[100px] right-[40px]">
                            <h2 className="text-[24px] font-[400]">Search Data</h2>
                            <p className="text-[16px] font-[400] leading-[25.6px] my-[20px]">Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                            <Link to="#" className="flex items-center cursor-pointer z-20">Learn more  <i className="fa-solid fa-arrow-right ms-3"></i></Link>
                        </div>
                    </div>

                    <div className="relative w-[523.21px] h-[382.1px]">
                        <img className="absolute top-1/3 left-0" src={imgIcon3} alt="features2" />
                        <img className="absolute right-0 bottom-0 z-10" src={imgBG3} alt="feateres1" />
                        <div className="absolute w-[216.66px] top-[100px] right-[40px]">
                            <h2 className="text-[24px] font-[400]">Search Data</h2>
                            <p className="text-[16px] font-[400] leading-[25.6px] my-[20px]">Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                            <Link to="#" className="flex items-center cursor-pointer z-20">Learn more  <i className="fa-solid fa-arrow-right ms-3"></i></Link>
                        </div>
                    </div>

                    <div className="relative w-[523.21px] h-[382.1px]">
                        <img className="absolute top-1/3 left-0" src={imgIcon4} alt="features2" />
                        <img className="absolute right-0 bottom-0 z-10" src={imgBG4} alt="feateres1" />
                        <div className="absolute w-[216.66px] top-[100px] right-[40px]">
                            <h2 className="text-[24px] font-[400]">Search Data</h2>
                            <p className="text-[16px] font-[400] leading-[25.6px] my-[20px]">Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                            <Link to="#" className="flex items-center cursor-pointer z-20">Learn more  <i className="fa-solid fa-arrow-right ms-3"></i></Link>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default HomePage
