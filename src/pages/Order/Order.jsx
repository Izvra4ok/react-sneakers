import React from 'react';
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/utils";
import OrderItem from "../../components/OrderItem/OrderItem";
import Button from "../../components/Button/Button";
import {NavLink} from "react-router-dom";
import cls from "./Order.module.scss";

const Order = () => {

    const items = useSelector(state => state.cart.itemsInCart);

    return (
        <div className={cls.orderPage}>

            <NavLink to={"/"}>
                <Button type="primary" size="s">Вернуться назад</Button>
            </NavLink>

            {
                items.length < 1
                    ? <h2 className={cls.orderPage__title}>Cart is empty</h2>
                    : <div>
                        <div className={cls.orderPage__left}>
                            {items.map(sneakers => <OrderItem key={Math.random()} items={sneakers}/>)}
                        </div>

                        <div className={cls.orderPage__right}>
                            <div className={cls.orderPage__price}>
                                <span>The value of {items.length} goods in the cart: {calcTotalPrice(items)} $</span>
                                <Button type="primary" size="m">Купить</Button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
};

export default Order;