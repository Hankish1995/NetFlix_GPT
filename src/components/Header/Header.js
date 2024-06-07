import React from 'react'
import { userIcon } from '../../utils/Images/Images'
import { UseSignOut } from '../../utils/customHooks/useAuthHooks'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../utils/redux/userSlice/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => { return store.user })
    const handleSignOut = async () => {
        const isSignOut = await UseSignOut()
        if (isSignOut) {
            dispatch(removeUser())
            navigate("/")
        }
    }
    return (
        <div>
            <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
                <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
                {user && <div className='flex'>
                    <img className='w-10 h-10 m-4' src={userIcon} alt="userIcon" />
                    <button className='text-yellow-400 font-bold' onClick={() => handleSignOut()}>Sign Out</button>
                </div>}
            </div>
        </div>
    )
}

export default Header