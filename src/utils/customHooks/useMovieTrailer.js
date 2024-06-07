import { useEffect } from "react";
import { movieTrailer } from "../redux/movieTrailerSlice/MovieTrailerSlice";
import { useDispatch } from "react-redux";

export const UseMovieTrailer = async (movie_id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (movie_id) {
            dispatch(movieTrailer({ movie_id: movie_id }))
        }
    }, [dispatch, movie_id])
}