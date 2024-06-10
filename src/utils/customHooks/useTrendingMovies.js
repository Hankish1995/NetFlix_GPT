import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { trending_movie_slice } from "../redux/trendingMovieSlice/TrendingMovieSlice";

export const UseTrendingMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(trending_movie_slice())
    }, [dispatch])
}