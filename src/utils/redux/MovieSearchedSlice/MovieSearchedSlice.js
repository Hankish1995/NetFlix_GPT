import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searched_movies_slice = createAsyncThunk("searched_movies_slice", async ({ searchedText }, thunkAPI) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjU0NDZkOWYwNzQ5Mzk1YjExNjI1ZWM4MThhZWZkNyIsInN1YiI6IjY2NjJlMDkyNzRhODY3NTllNGU5NmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z1bsEWMsR-2REPrvlqGLwhrPaPvNCDVRvJRu0nTFROk'
            }
        };

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchedText}&include_adult=false&language=en-US&page=1`, options)
        if (!response.ok) {
            const errorMessage = await response.json();
            if (errorMessage) {
                throw new Error(errorMessage.message);
            }
        }
        const result = await response.json();
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            message: error.message,
        });
    }
})

export const searchedMovieSlice = createSlice({
    name: "searchedMovieSlice",
    initialState: {
        data: [],
        isSuccess: false,
        isError: false,
        error: null,
        loading: false
    },
    reducers: {
        clear_searched_movies_result: (state) => {
            state.data = []
            state.isError = false
            state.isSuccess = false
            state.error = null
            state.loading = false
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searched_movies_slice.pending, (state) => {
                state.loading = true
            })
            .addCase(searched_movies_slice.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.loading = false
            })
            .addCase(searched_movies_slice.rejected, (state, action) => {
                state.error = action.payload
                state.isError = true
                state.loading = false
            })
    }
})
export const { clear_searched_movies_result } = searchedMovieSlice.actions
export default searchedMovieSlice.reducer