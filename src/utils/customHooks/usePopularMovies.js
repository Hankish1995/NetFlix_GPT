import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { popular_movie_slice } from "../redux/popularMovieSlice/PopularMovieSlice";

export const UsepopularMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(popular_movie_slice())
    }, [dispatch])
}