import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ButtonImage from "../ButtonImage/ButtonImage";
import {deleteFavourite, setFavourite} from "../../REDUX/FavouritesReducer/FavouritesReducer";

const FavouritesAdd = ({sneakers}) => {

    const dispatch = useDispatch();
    const favourite = useSelector(state => state.favourites.favouriteAdded);

    const isFavourite = favourite.some(fav => fav.id === sneakers.id);

    const handleAddFavourite = useCallback((e) => {
        e.stopPropagation();
        dispatch(setFavourite(sneakers));
    }, [sneakers]);

    const handleClickDeleteFavourite = useCallback((e) => {
        e.stopPropagation();
        dispatch(deleteFavourite(sneakers.id));
    }, [sneakers.id]);

    return (
        <div>
            {isFavourite
                ? <ButtonImage onClick={handleClickDeleteFavourite} width={60} image={"/img/liked.svg"}/>
                : <ButtonImage onClick={handleAddFavourite} width={60} image={"/img/unliked.svg"}/>
            }
        </div>
    );
};

export default FavouritesAdd;