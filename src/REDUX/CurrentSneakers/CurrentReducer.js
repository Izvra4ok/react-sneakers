import {createSlice} from "@reduxjs/toolkit";


const currentSlice = createSlice({
    name: "currentReducer",
    initialState: {
        currentShoes: [],
    },
    reducers: {
        setCurrentSneakers: (state, action) => {
            state.currentShoes = action.payload;

            try {
                let storage = JSON.stringify(state.currentShoes);
                localStorage.setItem('current', storage);
            } catch (error) {
                console.log(error.message, "error");
            }
        },
    }
})

export const {setCurrentSneakers} = currentSlice.actions;
export default currentSlice.reducer;
