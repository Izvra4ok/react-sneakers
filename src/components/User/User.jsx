import React from 'react';
import cls from "../QuickBar/QuickBar.module.scss";

const User = () => {
    return (
        <div className={cls.cartBlock__user}>
            <img src="/img/user.svg" alt="account"/>
        </div>
    );
};

export default User;