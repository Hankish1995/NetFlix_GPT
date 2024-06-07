import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nowPlaying } from "../redux/NowPlayingSlice/NowPlayingSlice";

export const UseNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(nowPlaying());
        };

        fetchData();
    }, [dispatch]);

    return true;
};
