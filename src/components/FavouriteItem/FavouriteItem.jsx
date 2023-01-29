import React from 'react';
import {useDispatch} from "react-redux";
import SneakersCover from "../SneakersCover/SneakersCover";
import {deleteFavourite} from "../../REDUX/FavouritesReducer/Favourites";
import {useNavigate} from "react-router-dom";
import cls from "./FavouriteItem.module.scss";


const FavouriteItem = ({favourite}) => {

    const dispatch = useDispatch();
    const history = useNavigate()

    const handleClickDeleteFavourite = (e) => {
        e.stopPropagation();
        dispatch(deleteFavourite(favourite.id))
    };

    return (
        <div className={cls.favouriteItem}>

            <div className={cls.favouriteItem__name}
                 onClick={() => history(`/${favourite.name}`)}>
                {favourite.name}
            </div>
            <div onClick={() => history(`/${favourite.name}`)}>
                <SneakersCover
                    image={favourite.image} width={200}/>
            </div>

            <div onClick={handleClickDeleteFavourite}>

                <img className={cls.favouriteItem__remove}
                     src="/img/btn-remove.svg" alt="btn-remove"/>
            </div>
        </div>
    );
};

export default FavouriteItem;