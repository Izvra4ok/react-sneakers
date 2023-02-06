import {createSlice} from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favouriteReducer",
    initialState: {
        favouriteAdded: []
    },
    reducers: {
        setFavourite: (state, action) => {
            state.favouriteAdded.push(action.payload);

            try {
                let storage = JSON.stringify(state.favouriteAdded);
                localStorage.setItem('favourite', storage);
            } catch (error) {
                console.log(error.message, "error");
            }
        },
        deleteFavourite: (state, action) => {
            state.favouriteAdded = state.favouriteAdded.filter(favourite => favourite.id !== action.payload)

            try {
                let storage = JSON.stringify(state.favouriteAdded);
                localStorage.setItem('favourite', storage);
            } catch (error) {
                console.log(error.message, "error");
            }
        },
    },
});

export const {setFavourite, deleteFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;