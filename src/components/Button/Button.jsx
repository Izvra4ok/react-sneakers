import React from 'react';
import "./Button.css";
import classNames from "classnames";

const Button = React.memo(({onClick, type, children, size = 's'}) => {

    const btnClass = classNames({
        "btn": true,
        "btn-secondary": type === "secondary",
        "btn-primary": type === "primary",
        "btn-small": size === "s",
        "btn-medium": size === "m",
    })

    return (

        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
});

export default Button;