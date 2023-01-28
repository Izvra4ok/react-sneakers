import React from 'react';
import cls from "../CartBlock.module.scss";

const Favourites = () => {

    return (
        <div className={cls.cartBlock__heart}>
            <img src="/img/heart.svg" alt="liked"/>
        </div>
    );
};

export default Favourites;