import React from 'react';

type ButtonProp = {
    label: string;
    setClassName: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProp> = ({ label, onClick, setClassName }) => {
    return <button className={'bg-buttonColor sm:w-[208.7px] sm:h-[59.63px] rounded-[50px] w-[108.7px] h-[40px]' + setClassName} onClick={onClick}>
        < span className='buttonText text-[14px] sm:text-[16px]'>{label}</span>
    </button>

}

export default Button;
