import React, { useState, useRef } from 'react'
import { checkValidateData } from '../../utils/validations/Validations'
import { UseSignUpAuth, UseSignIn } from '../../utils/customHooks/useAuthHooks'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const toggelAuth = () => {
        setIsSignIn(!isSignIn)
    }

    const handleAuth = async (e) => {
        e.preventDefault();
        const validate = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(validate);

        if (!validate) {
            if (!isSignIn) {
                try {
                    await UseSignUpAuth(email.current.value, password.current.value);
                    navigate("/browse")

                } catch (error) {
                    setErrorMessage(error.message);
                }
            } else {
                try {
                    await UseSignIn(email.current.value, password.current.value);
                    navigate("browse")
                } catch (error) {
                    setErrorMessage(error.message);
                }
            }
        }
    }

    return (
        <div>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
            </div>
            <div>
                <form className='absolute my-36 mx-auto right-0 left-0 bg-black p-12 w-3/12  text-center  bg-opacity-70'>
                    <h2 className='m-3 p-3 text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h2>
                    {!isSignIn && <div>
                        <input type='text' placeholder="Full Name" className='p-4 my-4  w-full rounded-lg' />
                    </div>}
                    <div>
                        <input type='text' placeholder="Email Addresss" ref={email} className='p-4 my-4  w-full rounded-lg' />
                    </div>
                    <div>
                        <input type='password' placeholder="Password" ref={password} className='p-4 my-4 w-full rounded-lg' />
                    </div>
                    <div>
                        <p className='p-4 text-red-600 font-bold'>{errorMessage}</p>
                    </div>
                    <div>
                        <button className='p-4 my-6 bg-red-500 rounded-lg w-full' onClick={(e) => handleAuth(e)}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                    </div>
                    <div>
                        <p className='m-4 p-4 cursor-pointer text-white' onClick={() => toggelAuth()}>{isSignIn ? "New to Netflix? SignUp Now" : "Already a user"}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login