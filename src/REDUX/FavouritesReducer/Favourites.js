import {createSlice} from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favouriteReducer",
    initialState: {
        favouriteAdded: []
    },
    reducers: {
        setFavourite: (state, action) => {
            state.favouriteAdded.push(action.payload)
        },
        deleteFavourite: (state, action) => {
            state.favouriteAdded = state.favouriteAdded.filter(favourite => favourite.id !== action.payload)
        },
    },
});

export const {setFavourite, deleteFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;