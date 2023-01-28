import React from 'react';
import cls from "./Search.module.scss";

const Search = () => {

    return (
        <div className={cls.search}>
            <img src="/img/search.svg" alt="search"/>
            <input type="text" placeholder="Поиск..."/>
        </div>
    );
};

export default Search;