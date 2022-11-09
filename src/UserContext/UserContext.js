import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const AuthProvider = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [userData, setUserData] = useState()

    //provider
    const googleProvider = new GoogleAuthProvider();
    //login with popup
    const logInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    //login with email and password
    const logInWithEmailAndPass = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sing up with email and password
    const singUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    //sing out
    const logOut = () =>{
        return signOut(auth)
    }

    //set user data
    useEffect(()=>{
        const unsubscribe = () => onAuthStateChanged(auth, currentUser=>{
            setUserData(currentUser)
        })
        return unsubscribe();
    },[])


    return (
        <AuthProvider.Provider value={{
            logInWithGoogle,
            logInWithEmailAndPass,
            singUp,
            logOut,
            userData
        }}>
            {
                children
            }
        </AuthProvider.Provider>
    );
};

export default UserContext;