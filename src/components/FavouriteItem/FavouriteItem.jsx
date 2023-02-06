import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import SneakersCover from "../SneakersCover/SneakersCover";
import {deleteFavourite} from "../../REDUX/FavouritesReducer/FavouritesReducer";
import {NavLink} from "react-router-dom";
import cls from "./FavouriteItem.module.scss";


const FavouriteItem = ({favourite}) => {

    const dispatch = useDispatch();

    const handleClickDeleteFavourite = useCallback((e) => {
        e.stopPropagation();
        dispatch(deleteFavourite(favourite.id))
    },[]);

    return (
        <div className={cls.favouriteItem}>

            <NavLink to={`/shoes/${favourite.name}`}>
                <div className={cls.favouriteItem__name}>
                    {favourite.name}
                </div>
            </NavLink>

            <NavLink to={`/shoes/${favourite.name}`}>
                <div>
                    <SneakersCover image={favourite.image} width={200}/>
                </div>
            </NavLink>

            <div onClick={handleClickDeleteFavourite}>
                <img className={cls.favouriteItem__remove}
                     src="/img/btn-remove.svg" alt="btn-remove"/>
            </div>
        </div>
    );
};

export default FavouriteItem;