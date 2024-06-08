import React from 'react'
import MovieList from './MovieList'
import { UseSelector, useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movieList = useSelector((store) => {return store.NOW_PLAYING})
    const now_playing_movies_list = movieList?.data?.results;
    return (
        <MovieList movies={now_playing_movies_list} title={"Now Playing"}/>
    )
}

export default SecondaryContainer