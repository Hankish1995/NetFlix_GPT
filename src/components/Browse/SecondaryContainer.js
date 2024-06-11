import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = ({ delete_margin }) => {
    const movieList = useSelector((store) => { return store.NOW_PLAYING })
    const popularMovies = useSelector((store) => { return store.POPULAR_MOVIE_LIST })
    const topRatedMovies = useSelector((store) => { return store.TOP_RATED_MOVIES })
    const upComingMovies = useSelector((store) => { return store.UP_COMING_MOVIES })
    const trendingMovies = useSelector((store) => { return store.TRENDING_MOVIES })
    const now_playing_movies_list = movieList?.data?.results;
    return (
        <>
            <div className='bg-black'>
                <div className={delete_margin ? "relative pl-24 z-50" : '-mt-72 relative pl-24 z-50'}>
                    <MovieList movies={trendingMovies?.data?.results} title={"Trending Now"} />
                    <MovieList movies={now_playing_movies_list} title={"Now Playing"} />
                    <MovieList movies={popularMovies?.data?.results} title={"Popular"} />
                    <MovieList movies={topRatedMovies?.data?.results} title={"Top Rated"} />
                    <MovieList movies={upComingMovies?.data?.results} title={"Up Coming Movies"} />
                </div>
            </div>
        </>
    )
}

export default SecondaryContainer