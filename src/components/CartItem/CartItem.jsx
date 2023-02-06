import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import SneakersCover from "../SneakersCover/SneakersCover";
import {deleteItemFromCart} from "../../REDUX/CartReducer/CartReducer";
import {NavLink} from "react-router-dom";
import cls from "./CartItem.module.scss";

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const handleClickDeleteItem = useCallback((e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(item.id))
    }, []);

    return (
        <div className={cls.cartItem}>

            <NavLink to={`/shoes/${item.name}`}>
                <div className={cls.cartItem__name}>{item.name}</div>
            </NavLink>

            <NavLink to={`/shoes/${item.name}`}>
                <SneakersCover image={item.image} width={100}/>
            </NavLink>
            <div className={cls.cartItem__price}>{item.price} руб

                <img className={cls.cartItem__remove}
                     onClick={handleClickDeleteItem}
                     src="/img/btn-remove.svg" alt="btn-remove"/>
            </div>
        </div>
    );
};

export default CartItem;