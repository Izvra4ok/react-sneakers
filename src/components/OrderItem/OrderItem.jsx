import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../REDUX/CartReducer/CartReducer";
import SneakersCover from "../SneakersCover/SneakersCover";
import {NavLink} from "react-router-dom";
import cls from "./OrderItem.module.scss";

const OrderItem = ({items}) => {

    const dispatch = useDispatch();

    const handleClick = useCallback((e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(items.id))
    },[]);

    return (
        <div className={cls.orderItem}>

            <div className={cls.orderItem__Cover}>
                <NavLink to={`/shoes/${items.name}`}>
                    <SneakersCover image={items.image}/>
                </NavLink>
            </div>

            <div className={cls.orderItem__Title}>
                <span>{items.name}</span>
            </div>

            <div className={cls.orderItem__Price}>
                <span>{items.price} руб.</span>
                <img className={cls.orderItem__Remove}
                     onClick={handleClick}
                     src="/img/btn-remove.svg" alt="btn-remove"/>
            </div>
        </div>
    );
};

export default OrderItem;