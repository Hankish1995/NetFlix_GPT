import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../userSlice/userSlice";
import now_playing from "../NowPlayingSlice/NowPlayingSlice";
import movie_trailer from "../movieTrailerSlice/MovieTrailerSlice";


const appStore = configureStore({
    reducer: {
        user: userSlice,
        NOW_PLAYING: now_playing,
        MOVIE_TRAILER: movie_trailer
    }
})

export default appStore