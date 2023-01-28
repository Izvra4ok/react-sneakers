import './App.scss';
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";

const App = () => {

    return (
        <div className="wrapper">
            <Header/>
            <Shop/>
        </div>
    );
}

export default App;
