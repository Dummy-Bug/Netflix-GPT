import React from 'react'
import Header from './Header'

const Login = () => {
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
                <form className='w-3/12 absolute p-12 bg-blue-900 my-36 mx-auto right-0 left-0'>
                    <input type='text' placeholder='Email or mobile number' className='p-2 m-2' />
                    <input type='password' placeholder='password' className='p-2 m-2' />
                    <button className='p-4'>
                        SiginIn
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login
