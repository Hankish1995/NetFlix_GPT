import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggelGptSearchBar: (state) => {
            state.showGptSearch = !state.showGptSearch
            return state
        }
    }
})
export const { toggelGptSearchBar } = gptSlice.actions
export default gptSlice.reducer