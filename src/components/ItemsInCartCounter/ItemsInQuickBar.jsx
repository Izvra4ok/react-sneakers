import React from 'react';
import cls from "./ItemsInQuickBar.module.css";

const ItemsInQuickBar = ({quality = 0}) => {

    return (
        <span className={cls.itemInQuickBar}>
            {quality}
        </span>
    )
};
export default ItemsInQuickBar;