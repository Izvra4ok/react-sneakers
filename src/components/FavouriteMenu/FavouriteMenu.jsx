import React from 'react';
import Button from "../Button/Button";
import FavouriteItem from "../FavouriteItem/FavouriteItem";
import {useNavigate} from "react-router-dom";
import cls from "./FavouriteMenu.module.scss";


const FavouriteMenu = ({favourite, onClick}) => {

    const history = useNavigate()

    return (
        <div className={cls.favouriteMenu}>
            <h2>Избранное</h2>
            <hr/>
            <div>
                {
                    favourite.length
                        ? <div className={cls.favouriteMenu__list}>
                            {
                                favourite.map(favour =>
                                    <div key={favour.id}>
                                        <FavouriteItem favourite={favour}/>
                                    </div>)
                            }

                            <div className={cls.favouriteMenu__order}>
                                {
                                    favourite.length > 0
                                        ? <div className={cls.favouriteMenu__price}>В закладках: {favourite.length}</div>
                                        : null}

                                <div onClick={() => {
                                    history("/")
                                }}>
                                    <Button onClick={onClick}
                                            type='primary'
                                            size="m">Вернуться назад
                                    </Button>
                                </div>

                            </div>
                        </div>

                        : <div className={cls.favouriteMenu__empty}>
                            <div>
                                <img src="/img/empty-cart.jpg" alt="empty-cart"/>
                            </div>
                            <div className={cls.favouriteMenu__empty_text}>Извранные товары отсутствуют
                                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p></div>
                            <div className={cls.favouriteMenu__empty_btn}>
                                <Button onClick={onClick}
                                        type='primary'
                                        size="m">Вернуться назад
                                </Button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default FavouriteMenu;