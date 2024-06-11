import React from 'react'
import { UseNowPlayingMovies } from '../../utils/customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { UsepopularMovies } from '../../utils/customHooks/usePopularMovies'
import { UseTopRatedMovies } from '../../utils/customHooks/useTopRatedMovies'
import { UseUpComingMovies } from '../../utils/customHooks/useUpComingMovies'
import { UseTrendingMovies } from '../../utils/customHooks/useTrendingMovies'
import GptSearch from './GptSearch/GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
    UseNowPlayingMovies()
    UsepopularMovies()
    UseTopRatedMovies()
    UseUpComingMovies()
    UseTrendingMovies()

    const toggel_result = useSelector(store => store.GPT_TOGGEL)

    return (
        <>
            {toggel_result?.showGptSearch ? (
                <GptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </>
    )
}

export default Browse