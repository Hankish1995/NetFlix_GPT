import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const trending_movie_slice = createAsyncThunk("trending_movie_slice", async (thunkAPI) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjU0NDZkOWYwNzQ5Mzk1YjExNjI1ZWM4MThhZWZkNyIsInN1YiI6IjY2NjJlMDkyNzRhODY3NTllNGU5NmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z1bsEWMsR-2REPrvlqGLwhrPaPvNCDVRvJRu0nTFROk'
            }
        };

        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
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

export const trendingMovieSlice = createSlice({
    name: "trendingMovieSlice",
    initialState: {
        data: [],
        isSuccess: false,
        isError: false,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(trending_movie_slice.pending, (state) => {
                state.loading = true
            })
            .addCase(trending_movie_slice.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.loading = false
            })
            .addCase(trending_movie_slice.rejected, (state, action) => {
                state.error = action.payload
                state.isError = true
                state.loading = false
            })
    }
})

export default trendingMovieSlice.reducer