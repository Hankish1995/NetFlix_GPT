import React, { useEffect, useState } from 'react'
import { userIcon, netflixLogo } from '../../utils/Images/Images'
import { UseSignOut } from '../../utils/customHooks/useAuthHooks'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../utils/redux/userSlice/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../utils/firebase/Firebase'
import { addUser } from '../../utils/redux/userSlice/userSlice'
import { toggelGptSearchBar } from '../../utils/redux/GptHandlerSlice/gptHandlerSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => { return store.user })
    const [searched_movies, setSearched_movies] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, accessToken } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName, token: accessToken }))
                navigate("/browse")
            }
            else {
                dispatch(removeUser())
                navigate("/")
            }
        })
        return () => unsubscribe()
    }, [dispatch, navigate])

    const handleSignOut = async () => {
        const isSignOut = await UseSignOut()
        if (isSignOut) {
            dispatch(removeUser())
        }
    }
    return (
        <div>
            <div className='absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
                <img className='w-44' src={netflixLogo} alt="logo" onClick={() => navigate("/browse")} />
                {user && <div className='flex'>
                    <div className='mt-3'>
                        <button className='text-white bg-red-500 p-2 m-2 rounded-lg' onClick={() => dispatch(toggelGptSearchBar({}))}>Search Movies</button>
                    </div>
                    <div className='mt-3'>
                        <button className='text-white bg-purple-700 rounded-lg font-bold p-2 m-2' onClick={() => dispatch(toggelGptSearchBar())}>GPT Search</button>
                    </div>
                    <img className='w-10 h-10 m-4' src={userIcon} alt="userIcon" />
                    <button className='text-yellow-400 font-bold' onClick={() => handleSignOut()}>Sign Out</button>
                </div>}
            </div>
        </div>
    )
}

export default Header