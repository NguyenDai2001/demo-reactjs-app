import React from 'react';
import { Link } from 'react-router-dom';

type FeaturesItem = {
    imageBG: string;
    imageIcon: string;
    title: string;
    paragraph: string;
    link: string
}

const HomeFeatures: React.FC<FeaturesItem> = ({ imageBG, imageIcon, title, paragraph, link }) => {
    return (
        <div className="relative w-[340px] sm:w-[523.21px] h-[342.1px] sm:h-[382.1px]">
            <img className="absolute top-1/3 left-0 size-[150px] sm:size-[220px]" src={imageIcon} alt="features2" />
            <img className="absolute right-[-20px] sm:right-0 bottom-0" src={imageBG} alt="feateres1" />
            <div className="absolute w-[200px] top-[80px] sm:top-[100px] right-[-10px] sm:right-[40px]">
                <h2 className="text-[24px] font-[400]">{title}</h2>
                <p className="text-[14px] font-[400] leading-[25.6px] my-[20px]">{paragraph}</p>
                <Link to={link} className="flex items-center cursor-pointer z-[1000]">Learn more  <i className="fa-solid fa-arrow-right ms-3"></i></Link>
            </div>
        </div>
    )
}

export default HomeFeatures
