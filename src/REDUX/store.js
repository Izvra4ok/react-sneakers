import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartReducer/CartReducer";
import favouriteReducer from "./FavouritesReducer/FavouritesReducer";
import currentReducer from "./CurrentSneakers/CurrentReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favourites: favouriteReducer,
        currentSneakers: currentReducer,
    },
});