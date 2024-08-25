import React, { useEffect, useState } from 'react';
import image1 from '../assets/Ellipse1.png';
import image2 from '../assets/Ellipse2.png';
import image3 from '../assets/Ellipse3.png';

type Slide = {
    id: number;
    image: string;
    name: string;
    content: string;
    link: string
};

const slides: Slide[] = [
    {
        id: 1, image: image1, name: 'John Fang', content: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.Arcu pulvinar aenean nam laoreet nulla", link: 'wordfaang.com'
    },
    { id: 2, image: image2, name: 'Jane Doe', content: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.", link: 'janedoee.com' },
    { id: 3, image: image3, name: 'Jim Ferry', content: "Suspendisse ultrices at diam lectus nullam. Nisl", link: 'jimjimf.com' },
];

const HomeSlide: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Thay đổi thời gian theo ý muốn
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative HomeSlide">
            <div className="relative slide w-[375px] sm:w-[1120px] h-[660px] sm:h-[710.27px] bg-buttonColor rounded-[50px]">
                <h2 className='absolute left-[100px] top-[50px] sm:top-[120px] text-[30px] sm:text-[40px] font-[700] text-[#ffffff]'>Testimonials</h2>
                <div className='absolute left-[20px] sm:left-[100px] bottom-[100px] w-[340px] sm:w-[931.66px] h-[430.59px] sm:h-[330.59px] rounded-[20px] bg-[#ffffff] drop-shadow-[0_20px_0px_rgba(138,86,219,1)]'>
                    <img src={slides[currentIndex].image} className='absolute top-[40px] sm:top-[60px] left-[100px] sm:left-[240px]' />
                    <div className='absolute w-[300px] sm:w-[340px] right-[00px] sm:right-[200px] top-[150px] sm:top-[60px]'>
                        <b className='text-[18px] font-[900] text-[#212353]'>{slides[currentIndex].name}</b>
                        <a href='#' className='block text-buttonColor '>{slides[currentIndex].link}</a>
                        <p className='text-[18px] font-[400] leading-[32.4px] mt-[20px] text-[#4B5D68]'>{slides[currentIndex].content}</p>
                    </div>
                </div>
            </div>
            <button onClick={goToPrevious} className='absolute top-[580px] sm:top-[450px] left-[30px]'><i className="fa-solid fa-arrow-left-long" style={{ fontSize: '40px', color: '#ffffff' }}></i></button>
            <button onClick={goToNext} className='absolute top-[580px] sm:top-[450px] right-[30px]'><i className="fa-solid fa-arrow-right-long " style={{ fontSize: '40px', color: '#ffffff' }}></i></button>
            <div className='absolute  right-[50%] left-[40%] sm:left-[50%] bottom-[50px] sm:bottom-[20px] w-[200px]'>
                <span className='inline-block w-2 h-2 bg-white rounded-[100px] mx-2'></span>
                <span className='inline-block w-2 h-2 bg-white rounded-[100px] mx-2'></span>
                <span className='inline-block w-2 h-2 bg-white rounded-[100px] mx-2'></span>
            </div>
        </div>
    );
};

export default HomeSlide;
