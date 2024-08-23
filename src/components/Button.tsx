import React from 'react';
import styles from './Button.module.scss';

type ButtonProp = {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProp> = ({ label, onClick }) => {
    return <button className={styles.button} onClick={onClick}>{label}</button>
}

export default Button;
