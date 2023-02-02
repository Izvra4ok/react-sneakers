import React from 'react';
import cls from "./Search.module.scss";

const Search = ({handleChange, searchValue,setSearchValue, handlerInputClick, handlerItemClickSearch, filterSneakers, isOpenSearch,setIsOpenSearch}) => {

    const clearInputSearch = () => {
        setSearchValue("");
        setIsOpenSearch(false);
    }

    return (
        <div className={cls.search}>

            <div className={cls.search__input}>
                <img src="/img/search.svg" alt="search"/>

                <input onClick={handlerInputClick}
                       value={searchValue}
                       onChange={handleChange}
                       type="text" placeholder="Поиск..."/>
                <span className={cls.search__delete} onClick={clearInputSearch}>X</span>
            </div>

            <ul className={cls.search__autoComplete}>
                {searchValue && isOpenSearch
                    ? filterSneakers.map(sneakers =>
                        <div key={Math.random()}>
                            <li onClick={handlerItemClickSearch}
                                className={cls.search__autoComplete_item}>{sneakers.name}</li>
                        </div>
                    )
                    : null}

            </ul>
        </div>
    );
};

export default Search;