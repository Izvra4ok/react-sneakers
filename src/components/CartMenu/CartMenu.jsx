import React from 'react';
import cls from "./CartMenu.module.scss";
import CartItem from "../CartItem/CartItem";
import {calcTotalPrice} from "../../utils/utils";
import Button from "../Button/Button";


const CartMenu = ({items}) => {

    const totalPrice = calcTotalPrice(items);

    return (
        <div className={cls.cartMenu}>
            <div>
                {items.length
                    ? <div className={cls.cartMenu__list}>
                        {
                            items.map(item =>
                                <div key={item.id}>
                                    <CartItem item={item}/>
                                </div>)
                        }

                        <div className={cls.cartMenu__order}>
                            {totalPrice > 0
                                ? <div className={cls.cartMenu__price}>Всего: {totalPrice} руб</div>
                                : null}
                            <Button type='primary'>Заказать</Button>
                        </div>
                    </div>

                    : <div className={cls.cartMenu__list_empty}>Empty</div>
                }

            </div>


        </div>
    );
};

export default CartMenu;