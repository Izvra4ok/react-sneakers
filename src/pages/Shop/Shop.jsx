import React, {useState} from 'react';
import {SNEAKERS} from "../../sneakers";
import SneakersItem from "../../components/SneakersItem/SneakersItem";
import Search from "../../components/Search/Search";
import cls from "./Shop.module.scss";
import MyCarousel from "../../components/Carousel/MyCarousel";


const Shop = () => {

    const [searchValue, setSearchValue] = useState("");
    const [isOpenSearch, setIsOpenSearch] = useState(true);

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    };

    const filterSneakers = SNEAKERS.filter(sneakers => {
        return sneakers.name.toLowerCase().includes(searchValue.toLowerCase())
    });

    const handlerItemClickSearch = (e) => {
        setSearchValue(e.target.textContent);
        setIsOpenSearch(false)
    };

    const handlerInputClick = () => {
        setIsOpenSearch(true);
    };

    return (
        <div className={cls.grid}>
            <MyCarousel/>
            <div className={cls.shop}>
                <div className={cls.shop__nav}>
                    <h1 className={cls.shop__title}>Все кроссовки</h1>

                    <Search filterSneakers={filterSneakers}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            handleChange={handleChange}
                            handlerInputClick={handlerInputClick}
                            handlerItemClickSearch={handlerItemClickSearch}
                            isOpenSearch={isOpenSearch}
                            setIsOpenSearch={setIsOpenSearch}/>
                </div>

                <div className={cls.shop__sneakersList} onClick={() => setIsOpenSearch(false)}>
                    {
                        filterSneakers.map(sneakers =>
                            <div key={Math.random()}>
                                <SneakersItem sneakers={sneakers}/>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
        ;
};

export default Shop;