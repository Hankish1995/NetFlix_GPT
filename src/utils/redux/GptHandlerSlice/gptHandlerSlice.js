import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        showGptSearch: false,
        searchMovie: false
    },
    reducers: {
        toggelGptSearchBar: (state, action) => {
            if (action.payload) {
                state.searchMovie = action.payload
                state.showGptSearch = !state.showGptSearch
            }
            else {
                state.showGptSearch = !state.showGptSearch
                state.searchMovie = false
            }
            return state
        }
    }
})
export const { toggelGptSearchBar } = gptSlice.actions
export default gptSlice.reducer