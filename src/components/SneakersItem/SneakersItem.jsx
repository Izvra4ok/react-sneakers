import React from 'react';
import cls from "./SneakersItem.module.scss";
import SneakersCover from "../SneakersCover/SneakersCover";
import SneakersBuy from "../SneakersBuy/SneakersBuy";


const SneakersItem = ({sneakers}) => {



    return (
        <div className={cls.sneakersItem}>

            <img className={cls.heart} src="/img/heart.svg" alt="heart"/>

            <SneakersCover image={sneakers.image} width={133}/>

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