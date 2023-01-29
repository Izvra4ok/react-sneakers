import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import {Route, Routes} from "react-router-dom";
import MyCarousel from "./components/Carousel/MyCarousel";
import Shoes from "./pages/Shoes/Shoes";
import "./App.scss"
import Order from "./pages/Order/Order";


const App = () => {

    return (
        <div className={"wrapper"}>
            <Header/>

            <div className={"content"}>
                <MyCarousel/>
            </div>

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
