import React, { useEffect, useState } from 'react';
import { UseMovieTrailer } from '../../utils/customHooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movie_id }) => {
    const [movie_trailer, setMovieTrailer] = useState();
    console.log(movie_trailer?.key, "this is the movie key")
    const current_movie_trailer = useSelector((store) => { return store.MOVIE_TRAILER; });
    UseMovieTrailer(movie_id);

    useEffect(() => {
        if (current_movie_trailer?.isSuccess) {
            const filtered_movies_trailer = current_movie_trailer?.data?.results?.filter((video) => video?.type === "Trailer");
            const trailer = filtered_movies_trailer?.length !== 0 ? filtered_movies_trailer[0] : current_movie_trailer?.data?.results[0];
            setMovieTrailer(trailer);
        }
    }, [current_movie_trailer]);

    return (
        <>
            <div>
                <iframe
                    src={`https://www.youtube.com/embed/${movie_trailer?.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            </div>
        </>
    );
};

export default VideoBackground;
