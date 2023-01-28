import React, {useState} from 'react';
import Favourites from "./Favourites/Favourites";
import User from "./User/User";
import ItemsInCartCounter from "../ItemsInCartCounter/ItemsInCartCounter";
import {BiCart} from "react-icons/bi";
import {BsFillCartCheckFill} from "react-icons/bs"
import CartMenu from "../CartMenu/CartMenu";
import {useSelector} from "react-redux";
import cls from "./CartBlock.module.scss"


const CartBlock = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);

    return (
        <div className={cls.cartBlock}>

            <div className={cls.cartBlock__nav}>{items.length
                ? <div>
                    <BsFillCartCheckFill onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} size={35}
                                         className={cls.cartBlock_Icon}/>
                    <ItemsInCartCounter quality={items.length}/>
                </div>
                : <BiCart onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} size={35}
                          className={cls.cartBlock_Icon}/>}

            <Favourites/>
            <User/>
            </div>

            {isCartMenuVisible
                ? <CartMenu items={items} onClick={() => {
                }}/>
                : null}
        </div>
    );
};

export default CartBlock;