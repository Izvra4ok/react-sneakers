import React from 'react';
import cls from "./SneakersCover.module.scss";


const SneakersCover = ({onClick,image,width}) => {

    return (
        <div className={cls.sneakersCover}>
            <img width={width} src={`${process.env.PUBLIC_URL}${image}`} alt="image"/>
        </div>

    );

};
export default SneakersCover;