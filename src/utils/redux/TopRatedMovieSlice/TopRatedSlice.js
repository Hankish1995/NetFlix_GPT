import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const top_rated_movie_slice = createAsyncThunk("top_rated_movie_slice", async (thunkAPI) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjU0NDZkOWYwNzQ5Mzk1YjExNjI1ZWM4MThhZWZkNyIsInN1YiI6IjY2NjJlMDkyNzRhODY3NTllNGU5NmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z1bsEWMsR-2REPrvlqGLwhrPaPvNCDVRvJRu0nTFROk'
            }
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', options)
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

export const topRatedMovieSlice = createSlice({
    name: "topRatedMovieSlice",
    initialState: {
        data: [],
        isSuccess: false,
        isError: false,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(top_rated_movie_slice.pending, (state) => {
                state.loading = true
            })
            .addCase(top_rated_movie_slice.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.loading = false
            })
            .addCase(top_rated_movie_slice.rejected, (state, action) => {
                state.error = action.payload
                state.isError = true
                state.loading = false
            })
    }
})

export default topRatedMovieSlice.reducer