import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>

            <div>
                <Header />
            </div>

            <div>
                <img className='absolute'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
                    alt='pic'>
                </img>
            </div>

            <div>
                <form className='w-3/12 absolute p-12 bg-opacity-90 bg-neutral-900 my-36 mx-auto right-0 left-0 text-white'>

                    <h1 className='font-bold text-3xl py-4'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>

                    {isSignInForm && (<input
                        type='text'
                        placeholder='Email or mobile number'
                        className='p-4 my-4 w-full bg-opacity-90 bg-neutral-900 border-solid rounded-md border-red-900'
                    />)}

                    {!isSignInForm && (<input
                        type='text'
                        placeholder='Email'
                        className='p-4 my-4 w-full bg-opacity-90 bg-neutral-900 border-solid rounded-md border-red-900'
                    />)}

                    {!isSignInForm && (<input
                        type='text'
                        placeholder='Mobile number'
                        className='p-4 my-4 w-full bg-opacity-90 bg-neutral-900 border-solid rounded-md border-red-900'
                    />)}
                    
                    <input
                        type='password'
                        placeholder='Password'
                        className='p-4 my-4 w-full opacity-90 bg-neutral-900 border-solid rounded-md border-red-900'
                    />
                    <button className='p-4 my-4 bg-red-700 w-full rounded-md'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign in now"}

                    </p>
                </form>
            </div>

        </div>
    )
}

export default Login
