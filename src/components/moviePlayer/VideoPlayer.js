import React, { useEffect, useState } from 'react'

const VideoPlayer = ({ movie_data }) => {
    const [movie_trailer, setMovieTrailer] = useState();
    console.log(movie_data, "this is the movie data")
    useEffect(() => {
        if (movie_data?.isSuccess) {
            const filtered_movies_trailer = movie_data?.data?.results?.filter((video) => video?.type === "Clip");
            const trailer = filtered_movies_trailer?.length !== 0 ? filtered_movies_trailer[0] : movie_data?.data?.results[0];
            setMovieTrailer(trailer);
        }
    }, [movie_data]);
    return (
        <>
            <div>
                <iframe
                    className='aspect-video w-[100%]'
                    src={`https://www.youtube.com/embed/${movie_trailer?.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            </div>
        </>
    )
}

export default VideoPlayer