import React from 'react';

type ButtonProp = {
    label: string;
    setClassName: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProp> = ({ label, onClick, setClassName }) => {
    return <button className={'bg-buttonColor w-[208.7px] h-[59.63px] rounded-[50px] ' + setClassName} onClick={onClick}>
        < span className='buttonText'>{label}</span>
    </button>

}

export default Button;
