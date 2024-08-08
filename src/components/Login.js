import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validate";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef();
    const mobile = useRef();
    const password = useRef();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {

            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value

            ).then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);

            });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value

            ).then((userCredential) => {

                const user = userCredential.user;
                console.log(user);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
    };

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
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className='w-3/12 absolute p-12 bg-opacity-90 bg-neutral-900 my-36 mx-auto right-0 left-0 text-white'>

                    <h1 className='font-bold text-3xl py-4'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>

                    <input
                        ref={email}
                        type='text'
                        placeholder='Email'
                        className='p-4 my-4 w-full bg-opacity-90 bg-neutral-900 border-solid rounded-md border-red-900'
                    />

                    {!isSignInForm && (<input
                        ref={mobile}
                        type='text'
                        placeholder='Mobile number'
                        className='p-4 my-4 w-full bg-opacity-90 bg-neutral-900 border-solid rounded-md border-red-900'
                    />)}

                    <input
                        ref={password}
                        type='password'
                        placeholder='Password'
                        className='p-4 my-4 w-full opacity-90 bg-neutral-900 border-solid rounded-md border-red-900'
                    />
                    <p className='text-red-500 font-bold text-md'>
                        {errorMessage}
                    </p>
                    <button className='p-4 my-4 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>
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
