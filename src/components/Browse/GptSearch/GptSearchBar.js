import React, { useEffect, useRef, useState } from 'react'
import { open_ai_movie_suggestions } from '../../../utils/redux/openAiSlice/OpenAiSlice'
import { useDispatch, useSelector } from 'react-redux'


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchedText = useRef()
    const [movie_suggestion, setMovie_suggestion] = useState([])
    const openAiMovieSuggesttions = useSelector(store => store?.OPENAI_MOVIE_SUGGESTIONS)
    console.log(openAiMovieSuggesttions, "this is the open Ai result")
    useEffect(() => {
        if (openAiMovieSuggesttions?.isSuccess) {
            const data = openAiMovieSuggesttions?.data[0]?.message?.content?.split(",")
            setMovie_suggestion(data)
        }

    }, [openAiMovieSuggesttions])

    const getOpenAiSuggestions = () => {
        const query = "act as a movie recommendation system suggest some movies for the query : " + searchedText?.current?.value + " " + ".only give me names of 10 movie,comma seprated like the example result given ahead. Example koi mil gya,golmaal,gadar,phir hera pheri etc";
        dispatch(open_ai_movie_suggestions({ message: query }))
    }
    return (
        <>
            <div className='py-8 flex justify-center pt-[10%]'>
                <div className='grid grid-cols-12 w-1/2'>
                    <input type='text' placeholder='Hey what do you want to watch Today..' ref={searchedText} className='p-2 m-2 col-span-9 rounded-lg' />
                    <button className='p-2 m-2 bg-red-600 col-span-3 rounded-lg' onClick={getOpenAiSuggestions}>Search</button>
                </div>
            </div>
            <div className='py-8 flex justify-center pt-[10%]'>
                {openAiMovieSuggesttions?.loading && <h6 className='text-white text-4xl'>Please wait while we are fetching result for {searchedText?.current?.value}</h6>}
                {movie_suggestion?.map((movie_list, index) => {// Log the content of movie_list
                    return (
                        <h1 key={index} className="text-white p-4 m-4">
                            {Array.isArray(movie_list) ? movie_list.join(",") : movie_list}
                        </h1>
                    );
                })}
            </div>
        </>
    )
}

export default GptSearchBar