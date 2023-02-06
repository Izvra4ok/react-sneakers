import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../REDUX/CartReducer/CartReducer";
import ButtonImage from "../ButtonImage/ButtonImage";


const SneakersBuy = ({sneakers}) => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);

    const isItemInCart = items.some(item => item.id === sneakers.id);

    const handleAddItemInCart = useCallback((e) => {
        e.stopPropagation();
        dispatch(setItemInCart(sneakers))
    }, [sneakers]);

    const handleClickDeleteItem = useCallback((e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(sneakers.id))
    }, [sneakers.id]);

    return (
        <div>
            {
                isItemInCart
                    ? <ButtonImage onClick={handleClickDeleteItem} image={"/img/btn-checked.svg"}/>
                    : <ButtonImage onClick={handleAddItemInCart} image={"/img/btn-plus.svg"}/>
            }
        </div>
    );
};

export default SneakersBuy;