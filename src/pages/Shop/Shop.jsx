import React from 'react';
import {SNEAKERS} from "../../sneakers";
import cls from "./Shop.module.scss";
import SneakersItem from "../../components/SneakersItem/SneakersItem";
import Search from "../../components/Search/Search";


const Shop = () => {

    return (
        <div className={cls.shop}>
            <div className={cls.shop__nav}>
                <h1 className={cls.shop__title}>Все кроссовки</h1>
                <Search/>
            </div>

            <div className={cls.shop__sneakersList}>
                {SNEAKERS.map(sneakers =>
                    <div key={Math.random()}>
                        <SneakersItem sneakers={sneakers}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;