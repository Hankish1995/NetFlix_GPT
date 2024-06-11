import React from "react";
import { TMDB_IMAGE_URL } from "../../utils/Images/Images";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, id }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-48 pr-4 min-w-48" onClick={() => navigate("/watch-movie", { state: { movie_id: id } })}>
                <img alt="poster" src={TMDB_IMAGE_URL + poster_path} />
            </div>
        </>
    )
}

export default MovieCard