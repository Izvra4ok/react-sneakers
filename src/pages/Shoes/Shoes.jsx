import React, {useEffect} from 'react';
import cls from "./Shoes.module.scss";
import {useSelector} from "react-redux";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import SneakersBuy from "../../components/SneakersBuy/SneakersBuy";
import {calcTotalPrice} from "../../utils/utils";


const Shoes = () => {

    const history = useNavigate();
    const currentSneakers = useSelector(state => state.currentSneakers.currentShoes);
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === currentSneakers.id);
    const totalPrice = calcTotalPrice(items);


    useEffect(() => {
    }, [currentSneakers.name, currentSneakers.image])

    if (!currentSneakers.video && !currentSneakers.image) {
        return <h2>Loading...</h2>
    }
    if (!currentSneakers.name) return <h2>...Loading</h2>

    return (
        <div>
            <div className={cls.current}>
                <h2 className={cls.current__title}>{currentSneakers.name}</h2>

                <div className={cls.current__description}>
                    <div className={cls.current__image}>
                        <img src={currentSneakers.image} alt={currentSneakers.name}/>
                    </div>
                    <div className={cls.current__text}>
                        {currentSneakers.description}
                    </div>
                    <div>
                        <SneakersBuy sneakers={currentSneakers}/>
                    </div>
                </div>

                    {isItemInCart
                        ? <div className={cls.current__order}>Стоимость: {currentSneakers.price}
                            <Button onClick={() => {
                                history("/order/")
                            }} type='primary' size="m">Оформить заказ
                            </Button>
                        </div>
                        : <div className={cls.current__order}>
                            <Button onClick={() => {
                            history("/")
                        }}
                                     type='primary'
                                     size="m">Вернуться назад</Button></div>
                    }


            </div>
        </div>
    );
};

export default Shoes;