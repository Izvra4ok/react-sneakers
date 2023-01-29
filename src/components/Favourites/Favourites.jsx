import React from 'react';
import cls from "./Favourites.module.scss";


const Favourites = ({image, width, onClick}) => {
    return (
        <img className={cls.favourite} onClick={onClick} width={width}
             src={`${process.env.PUBLIC_URL}${image}`} alt="favourite"/>
    );
};

export default Favourites;