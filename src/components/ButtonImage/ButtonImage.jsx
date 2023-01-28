import React from 'react';
import cls from "./ButtonImage.module.scss";


const ButtonImage = ({image, width, onClick}) => {
    return (
        <img className={cls.btn} onClick={onClick} width={width}
             src={`${process.env.PUBLIC_URL}${image}`} alt="btn"/>
    );
};

export default ButtonImage;