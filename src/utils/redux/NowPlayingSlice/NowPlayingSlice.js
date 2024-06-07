import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const nowPlaying = createAsyncThunk("nowPlaying", async (thunkAPI) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
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

export const now_playing = createSlice({
    name: "now_playing",
    initialState: {
        data: [],
        isSuccess: false,
        loading: false,
        isError: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(nowPlaying.pending, (state) => {
                state.loading = true
            })
            .addCase(nowPlaying.fulfilled, (state, action) => {
                state.data = action.payload
                state.isSuccess = true
                state.loading = false
            })
            .addCase(nowPlaying.rejected, (state, action) => {
                state.error = action.payload
                state.isError = true
                state.loading = false
            })
    }
})

export default now_playing.reducer

