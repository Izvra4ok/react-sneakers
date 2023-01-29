import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartReducer/CartReducer";
import favouriteReducer from "./FavouritesReducer/Favourites";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favourites: favouriteReducer,
    },
});