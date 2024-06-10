import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../userSlice/userSlice";
import now_playing from "../NowPlayingSlice/NowPlayingSlice";
import movie_trailer from "../movieTrailerSlice/MovieTrailerSlice";
import popularMovieSlice from "../popularMovieSlice/PopularMovieSlice";
import topRatedMovieSlice from "../TopRatedMovieSlice/TopRatedSlice";
import upComingMovieSlice from "../upComingMovieSlice/UpComingMovieSlice";
import trendingMovieSlice from "../trendingMovieSlice/TrendingMovieSlice";
import gptSlice from "../GptHandlerSlice/gptHandlerSlice";
import open_ai_movie_slice from "../openAiSlice/OpenAiSlice";


const appStore = configureStore({
    reducer: {
        user: userSlice,
        NOW_PLAYING: now_playing,
        MOVIE_TRAILER: movie_trailer,
        POPULAR_MOVIE_LIST: popularMovieSlice,
        TOP_RATED_MOVIES: topRatedMovieSlice,
        UP_COMING_MOVIES: upComingMovieSlice,
        TRENDING_MOVIES: trendingMovieSlice,
        GPT_TOGGEL: gptSlice,
        OPENAI_MOVIE_SUGGESTIONS: open_ai_movie_slice
    }
})

export default appStore