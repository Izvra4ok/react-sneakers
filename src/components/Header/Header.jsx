import React from 'react';
import cls from "./Header.module.scss";
import CartBlock from "../CartBlock/CartBlock";


const Header = () => {

    return (
        <header className={cls.header}>

            <div className={cls.header__logoInform}>
                <a href="##"><img src="/img/logo.png" alt="logo"/></a>

                <div className={cls.header__logoTitle}>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <CartBlock/>

        </header>
    );
};

export default Header;