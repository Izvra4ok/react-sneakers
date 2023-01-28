import React from 'react';
import cls from "../CartBlock.module.scss";


const Cart = () => {

    return (
        <div className={cls.cartBlock__cart}>
            <img src="/img/cart.svg" alt="cart"/>
            <span>1205 руб</span>
        </div>
    );
};

export default Cart;