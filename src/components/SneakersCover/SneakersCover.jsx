import React from 'react';
import cls from "./SneakersCover.module.scss";


const SneakersCover = ({image}) => {

    return (
        <div className={cls.sneakersCover}>
            <img src={`${process.env.PUBLIC_URL}${image}`} alt="image"/>
        </div>
    );

};
export default SneakersCover;