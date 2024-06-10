import openai from "../../openAi/openai";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const open_ai_movie_suggestions = createAsyncThunk("open_ai_movie_suggestions", async ({ message }, thunkAPI) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: message }],
            model: 'gpt-3.5-turbo',
        });
        return response.choices
    } catch (error) {
        return thunkAPI.rejectWithValue({
            message: error.message,
        });
    }
})

export const open_ai_movie_slice = createSlice({
    name: "open_ai_movie_slice",
    initialState: {
        data: [],
        loading: false,
        error: null,
        isError: false,
        isSuccess: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(open_ai_movie_suggestions.pending, (state) => {
                state.loading = true
            })
            .addCase(open_ai_movie_suggestions.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.isSuccess = true
            })
            .addCase(open_ai_movie_suggestions.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.isError = true
            })
    }
})

export default open_ai_movie_slice.reducer