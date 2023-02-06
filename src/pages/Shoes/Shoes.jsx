import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "../../components/Button/Button";
import {NavLink} from "react-router-dom";
import {setItemInCart} from "../../REDUX/CartReducer/CartReducer";
import cls from "./Shoes.module.scss";


const Shoes = () => {

    const dispatch = useDispatch();
    const currentSneakers = useSelector(state => state.currentSneakers.currentShoes);
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === currentSneakers.id);

    const handleAddItemInCart = useCallback((e) => {
        e.stopPropagation();
        dispatch(setItemInCart(currentSneakers))
    }, [currentSneakers,dispatch]);

    if (!currentSneakers.name && !currentSneakers.image) return <h2>Loading...</h2>

    return (
        <div>

            <NavLink to={"/"}>
                <Button type="primary" size="s">Вернуться назад</Button>
            </NavLink>

            <div className={cls.current}>
                <h2 className={cls.current__title}>{currentSneakers.name}</h2>

                <div className={cls.current__description}>
                    <div className={cls.current__image}>
                        <img src={currentSneakers.image} alt={currentSneakers.name}/>
                    </div>
                    <div className={cls.current__text}>
                        {currentSneakers.description}
                    </div>

                </div>

                {
                    isItemInCart
                        ? <div className={cls.current__order}>
                            <span>Стоимость: {currentSneakers.price} руб</span>
                            <NavLink to={"/order/"}>
                                <Button type="primary" size="m">Оформить заказ</Button>
                            </NavLink>
                        </div>
                        : <div className={cls.current__order}>
                            <Button onClick={handleAddItemInCart} type="primary" size="s">Добавить в корзину</Button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Shoes;