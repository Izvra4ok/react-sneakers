import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import {Route, Routes} from "react-router-dom";
import Shoes from "./pages/Shoes/Shoes";
import Order from "./pages/Order/Order";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setItemInCart} from "./REDUX/CartReducer/CartReducer";
import {setFavourite} from "./REDUX/FavouritesReducer/FavouritesReducer";
import "./App.scss"
import {setCurrentSneakers} from "./REDUX/CurrentSneakers/CurrentReducer";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        try {
            if (!!(localStorage.getItem("cart"))) {
                JSON.parse(localStorage.getItem("cart")).map((cardData) => (
                    dispatch(setItemInCart(cardData))
                ))
            }

            if (!!(localStorage.getItem("favourite"))) {
                JSON.parse(localStorage.getItem("favourite")).map((favouriteData) => (
                    dispatch(setFavourite(favouriteData))
                ))
            }

            if (localStorage.getItem("current")) {
                dispatch(setCurrentSneakers(JSON.parse(localStorage.getItem("current" || ""))));
            }
        } catch (error) {
            console.log(error.message, "error",)
        }
    }, [])

    return (
        <div className={"wrapper"}>
            <Header/>

            <div className={"content"}>
                <Routes>
                    <Route path={"/*"} element={<Shop/>}/>
                    <Route path={"/home/*"} element={<Shop/>}/>

                    <Route path={"/shoes/*"} element={<Shoes/>}/>
                    <Route path={"/shoes/:name/*"} element={<Shoes/>}/>

                    <Route path={"/order/*"} element={<Order/>}/>

                    <Route path="*" element={<h2>"404 Not Found"</h2>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
