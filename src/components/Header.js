import React from 'react'

import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {

        signOut(auth)
            .then(() => {

                // navigate("/");
            }
            )
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsiubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50'>

            <img
                className='w-44'
                src={LOGO}
                alt="logo">
            </img>

            {user && (<div className="flex p-2 justify-between">
                <img
                    className="hidden md:block w-12 h-12"
                    alt="pic"
                    src={user?.photoURL ? user.photoURL : null} />
                <button onClick={handleSignOut} className="font-bold text-white ">
                    (Sign Out)
                </button>
            </div>)}
        </div >
    )
}

export default Header