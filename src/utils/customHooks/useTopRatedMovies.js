import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { top_rated_movie_slice } from "../redux/TopRatedMovieSlice/TopRatedSlice";

export const UseTopRatedMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(top_rated_movie_slice())
    }, [dispatch])
}