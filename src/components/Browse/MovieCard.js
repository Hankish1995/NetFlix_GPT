import React from "react";
import { TMDB_IMAGE_URL } from "../../utils/Images/Images";

const MovieCard = ({ poster_path }) => {
    return (
        <>
            <div className="w-48 pr-4 min-w-48">
                <img alt="poster" src={TMDB_IMAGE_URL + poster_path} />
            </div>
        </>
    )
}

export default MovieCard