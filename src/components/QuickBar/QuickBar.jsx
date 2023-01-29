import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Favourites from "../Favourites/Favourites";
import User from "../User/User";
import ItemsInQuickBar from "../ItemsInCartCounter/ItemsInQuickBar";
import {BiCart} from "react-icons/bi";
import {BsFillCartCheckFill} from "react-icons/bs"
import CartMenu from "../CartMenu/CartMenu";
import FavouriteMenu from "../FavouriteMenu/FavouriteMenu";
import cls from "./QuickBar.module.scss"


const QuickBar = () => {

    const items = useSelector(state => state.cart.itemsInCart);
    const favourite = useSelector(state => state.favourites.favouriteAdded);
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const [isFavouriteMenuVisible, setIsFavouriteMenuVisible] = useState(false);

    return (
        <div className={cls.quickBar}>

            <div className={cls.quickBar__nav}>
                {items.length
                    ? <div className={cls.quickBar__icon}>
                        <BsFillCartCheckFill onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} size={45}
                                             className={cls.quickBar__icon}/>
                        <ItemsInQuickBar quality={items.length}/>
                    </div>
                    : <div className={cls.quickBar__icon}>
                        <BiCart onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} size={45}/>
                    </div>
                }

                {favourite.length
                    ? <div className={cls.quickBar__icon}>
                        <Favourites onClick={() => setIsFavouriteMenuVisible(!isFavouriteMenuVisible)}
                                    image={"/img/liked.svg"}
                                    width={55}/>
                        <ItemsInQuickBar quality={favourite.length}/>
                    </div>

                    : <div className={cls.quickBar__icon}>
                        <Favourites onClick={() => setIsFavouriteMenuVisible(!isFavouriteMenuVisible)}
                                    image={"/img/unliked.svg"}
                                    width={55}/>
                    </div>}
                <User/>
            </div>

            {isCartMenuVisible
                ? <CartMenu items={items} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
                : null}

            {isFavouriteMenuVisible
                ? <FavouriteMenu favourite={favourite}
                                 onClick={() => setIsFavouriteMenuVisible(!isFavouriteMenuVisible)}/>
                : null}
        </div>
    );
};

export default QuickBar;