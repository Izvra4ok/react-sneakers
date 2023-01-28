import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartReducer/CartReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});