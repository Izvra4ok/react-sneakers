import React from 'react';
import {useDispatch} from "react-redux";
import SneakersCover from "../SneakersCover/SneakersCover";
import {deleteItemFromCart} from "../../REDUX/CartReducer/CartReducer";
import cls from "./CartItem.module.scss";

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const handleClickDeleteItem = (e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(item.id))
    };

    return (
        <div className={cls.cartItem}>
            <div className={cls.cartItem__name}>{item.name}</div>
            <SneakersCover image={item.image} width={100}/>
            <div className={cls.cartItem__price}>{item.price} руб

                <img className={cls.cartItem__remove}
                     onClick={handleClickDeleteItem}
                     src="/img/btn-remove.svg" alt="btn-remove"/>
            </div>
        </div>
    );
};

export default CartItem;