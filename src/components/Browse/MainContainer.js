import React, { useEffect, useState } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const now_playing_movies = useSelector((store) => { return store.NOW_PLAYING })
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (now_playing_movies?.isSuccess) {
            function getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            const maxIndex = now_playing_movies.data.results.length - 1;
            const randomNumber = getRandomNumber(0, maxIndex);
            const movie = now_playing_movies.data.results[randomNumber];
            setSelectedMovie(movie);
        }
    }, [now_playing_movies]);


    return (
        <>
            <VideoTitle title={selectedMovie?.original_title} overview={selectedMovie?.overview} />
            <VideoBackground movie_id={selectedMovie?.id} />
        </>
    )
}

export default MainContainer