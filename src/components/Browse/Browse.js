import React from 'react'

import { UseNowPlayingMovies } from '../../utils/customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
    UseNowPlayingMovies()

    return (
        <>
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}

export default Browse