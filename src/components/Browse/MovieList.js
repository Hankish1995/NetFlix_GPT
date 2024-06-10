import React, { useEffect, useRef } from 'react';
import MovieCard from "./MovieCard";
import './MovieList.css';

const MovieList = ({ title, movies }) => {
    const scrollContainer = useRef(null);

    useEffect(() => {
        const container = scrollContainer.current;

        const handleScroll = (event) => {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        };

        if (container) {
            container.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);
    return (
        <div className="py-4">
            <h1 className="text-3xl py-6 text-white">{title}</h1>
            <div ref={scrollContainer} className="flex overflow-x-scroll space-x-4 no-scrollbar">
                {movies?.map(movie => (
                    <MovieCard key={movie?.id} poster_path={movie?.poster_path} className="min-w-[200px]" />
                ))}
            </div>
        </div>
    )
}

export default MovieList