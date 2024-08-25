
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
import imgIcon2 from '../assets/image4.png';
import imgIcon3 from '../assets/image5 1.png';
import imgIcon4 from '../assets/image6 1.png';
import HomeFeatures from "../components/HomeFeatures";
import HomeSlide from '../components/HomeSlide';

const HomePage = () => {
    const [buttonSignIn] = useState<boolean>(true)

    const handldeClick = () => {
    }


    return (
        <>
            <section className='wrapper relative h-[685.71px] mt-[48px] '>
                <header className="flex justify-between sm:h-[59.63px] h-[30px] items-center">
                    <Link to="/"><img src={LogoImage} className="w-[48.7px] h-[34.78px] ms-5 sm:ms-0 " alt="Logo" /></Link>

                    {buttonSignIn &&
                        <div className=" flex justify-between w-[220px] me-3 sm:w-[450px] sm:me-0">
                            <Button label='Profile' setClassName="" onClick={handldeClick} />
                            <Button label='Logout' setClassName="" onClick={handldeClick} />
                        </div>
                    }
                    {!buttonSignIn &&
                        <Button label='Sign In' setClassName="" onClick={handldeClick} />
                    }
                </header>
                <img src={image1} className="absolute bottom-0 right-0 w-[759.25px] h-[240px] sm:h-[401.49px]" alt="image1" />
                <div className="absolute w-[300px] sm:w-[640.99px] bottom-[200px] sm:bottom-[50px] left-4 sm:left-0">
                    <h1 className="text-[50px] sm:text-[80px] text-textTitleColor leading-[58px] sm:leading-[88px] font-[700] my-[40px]">Save your data storage here.</h1>
                    <p className="text-textParaColor text-[18px] w-[277.64px] sm:w-[377.64px] font-[500] leading-[26px] sm:leading-[28.8px]">Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                    <Button label='Learn more' setClassName="w-[168.94px] h-[40px] sm:h-0 mt-[40px] " onClick={handldeClick} />
                </div>
            </section>

            {/* Features         */}
            <section className="wrapper">
                <div className="text-center mt-[100px] mb-[0px] sm:mb-[100px]">
                    <h1 className="text-[40px] font-[700] my-[30px]">Features</h1>
                    <p className="text-textParaColor inline-block text-[18px] w-[330px] sm:w-[575.12px] font-[500] leading-[28.8px]">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 ">
                    <HomeFeatures imageBG={imgBG1} imageIcon={imgIcon1} title="Search Data" paragraph="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time." link="#" />
                    <HomeFeatures imageBG={imgBG2} imageIcon={imgIcon2} title="24 Hours Access" paragraph="Access is given 24 hours a full morning to night and
meet again in the morning, giving you comfort when
you need data when urgent." link="#" />
                    <HomeFeatures imageBG={imgBG3} imageIcon={imgIcon3} title="Print Out" paragraph="Print out service gives you convenience if someday
you need print data, just edit it all and just print it." link="#" />
                    <HomeFeatures imageBG={imgBG4} imageIcon={imgIcon4} title="Security Code" paragraph="Data Security is one of our best facilities. Allows for your files
to be safer. The file can be secured with a code or password that 
you created, so only you can open the file." link="#" />
                </div>
            </section>

            {/* slide show */}
            <section className="wrapper mt-24">
                <HomeSlide />
            </section>


            {/* line */}
            <section className="wrapper flex items-center">
                <hr className="my-[100px] w-[1400px]"></hr>
            </section>

        </>
    )
}

export default HomePage
