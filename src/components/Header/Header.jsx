import React from 'react';
import {NavLink} from "react-router-dom";
import QuickBar from "../QuickBar/QuickBar";
import cls from "./Header.module.scss";


const Header = () => {

    return (
        <header className={cls.header}>

            <div className={cls.header__logoInform}>
                <NavLink to={"/"}>
                    <img src="/img/logo.png" alt="logo"/>
                </NavLink>

                <div className={cls.header__logoTitle}>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <QuickBar/>

        </header>
    );
};

export default Header;