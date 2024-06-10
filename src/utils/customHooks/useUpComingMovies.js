import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { up_coming_movie_slice } from "../redux/upComingMovieSlice/UpComingMovieSlice";

export const UseUpComingMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(up_coming_movie_slice())
    }, [dispatch])
}