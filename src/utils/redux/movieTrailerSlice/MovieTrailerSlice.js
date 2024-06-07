import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const movieTrailer = createAsyncThunk("movieTrailer", async ({ movie_id }, thunkAPI) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjU0NDZkOWYwNzQ5Mzk1YjExNjI1ZWM4MThhZWZkNyIsInN1YiI6IjY2NjJlMDkyNzRhODY3NTllNGU5NmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z1bsEWMsR-2REPrvlqGLwhrPaPvNCDVRvJRu0nTFROk',
                'accept': 'application/json'
            }
        };
        const response = await fetch(url, options)
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

export const movie_trailer = createSlice({
    name: "movie_trailer",
    initialState: {
        data: [],
        isSuccess: false,
        isError: false,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(movieTrailer.pending, (state) => {
                state.loading = true
            })
            .addCase(movieTrailer.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.loading = false
            })
            .addCase(movieTrailer.rejected, (state, action) => {
                state.error = action.payload
                state.isError = true
                state.loading = false
            })
    }
})

export default movie_trailer.reducer