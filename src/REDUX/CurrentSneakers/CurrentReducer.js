import {createSlice} from "@reduxjs/toolkit";


const currentSlice = createSlice({
    name: "currentReducer",
    initialState: {
        currentShoes: [],
    },
    reducers: {
        setCurrentSneakers: (state, action) => {
            state.currentShoes = action.payload;
            let response = JSON.stringify(state.currentShoes)
            if (response) {
                localStorage.setItem("shoes", response)
            }
        },

    }
})

export const {setCurrentSneakers} = currentSlice.actions;
export default currentSlice.reducer;
