import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UseMovieTrailer } from '../../utils/customHooks/useMovieTrailer'
import { useSelector } from 'react-redux'
import VideoPlayer from './VideoPlayer'
import SecondaryContainer from '../Browse/SecondaryContainer'

const MoviePlayer = () => {
    const location = useLocation()
    const current_movie_trailer = useSelector((store) => store.MOVIE_TRAILER);
    UseMovieTrailer(location?.state?.movie_id)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <VideoPlayer movie_data={current_movie_trailer} />
            <SecondaryContainer delete_margin={true} />
        </>
    )
}

export default MoviePlayer
