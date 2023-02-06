import React from 'react';
import {NavLink} from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import {calcTotalPrice} from "../../utils/utils";
import Button from "../Button/Button";
import cls from "./CartMenu.module.scss";


const CartMenu = ({items, onClick}) => {

    const totalPrice = calcTotalPrice(items);

    return (
        <div className={cls.cartMenu}>
            <h2>Корзина</h2>
            <hr/>

            <div>
                {
                    items.length
                        ? <div className={cls.cartMenu__list}>
                            {
                                items.map(item =>
                                    <div key={item.id}>
                                        <CartItem item={item}/>
                                    </div>)
                            }

                            <div onClick={onClick}
                                 className={cls.cartMenu__order}>

                                {
                                    totalPrice > 0
                                        ? <div className={cls.cartMenu__price}>Всего: {totalPrice} руб</div>
                                        : null
                                }

                                <NavLink to={"/order/"}>
                                    <Button type='primary' size="m">Оформить заказ</Button>
                                </NavLink>
                            </div>
                        </div>

                        : <div className={cls.cartMenu__empty}>
                            <div>
                                <img src="/img/empty-cart.jpg" alt="empty-cart"/>
                            </div>
                            <div className={cls.cartMenu__empty_text}>Корзина пустая
                                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                            </div>
                            <div className={cls.cartMenu__empty_btn}>
                                <Button onClick={onClick}
                                        type='primary'
                                        size="m">Вернуться назад</Button>
                            </div>
                        </div>
                }
            </div>


        </div>
    );
};

export default CartMenu;