import React from 'react';
import SneakersCover from "../SneakersCover/SneakersCover";
import SneakersBuy from "../SneakersBuy/SneakersBuy";
import FavouritesAdd from "../FavouritesAdd/FavouritesAdd";
import cls from "./SneakersItem.module.scss";
import {NavLink} from "react-router-dom";


const SneakersItem = ({sneakers}) => {

    return (
        <div className={cls.sneakersItem}>

            <div className={cls.heart}>
                <FavouritesAdd sneakers={sneakers}/>
            </div>

            <NavLink to={`/shoes/${sneakers.name}`}>
                <SneakersCover image={sneakers.image} width={133}/>
            </NavLink>

            <div className={cls.sneakersItem__title}>{sneakers.name}</div>

            <div className={cls.sneakersItem__price}>
                <div>
                    <div>Цена:</div>
                    <span>{sneakers.price} руб.</span>
                </div>

                <div>
                    <SneakersBuy sneakers={sneakers}/>
                </div>
            </div>

        </div>
    );
};

export default SneakersItem;