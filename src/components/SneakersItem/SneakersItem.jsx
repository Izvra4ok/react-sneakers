import React, {useCallback} from 'react';
import SneakersCover from "../SneakersCover/SneakersCover";
import SneakersBuy from "../SneakersBuy/SneakersBuy";
import FavouritesAdd from "../FavouritesAdd/FavouritesAdd";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentSneakers} from "../../REDUX/CurrentSneakers/CurrentReducer";
import cls from "./SneakersItem.module.scss";


const SneakersItem = ({sneakers}) => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const handleOpenCurrentShoes = useCallback(() => {
        dispatch(setCurrentSneakers(sneakers));
        history("/shoes/" + sneakers.name);
    }, [history]);

    return (
        <div className={cls.sneakersItem}>

            <div className={cls.heart}>
                <FavouritesAdd sneakers={sneakers}/>
            </div>

            <div className={cls.sneakersItem__cover} onClick={handleOpenCurrentShoes}>
                <SneakersCover image={sneakers.image}/>

                <div className={cls.sneakersItem__title}>{sneakers.name}</div>
            </div>

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