import React, { createContext } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const AuthProvider = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const logInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // const contextValue = {logInWithGoogle}
    return (
        <AuthProvider.Provider value={{
            logInWithGoogle
        }}>
            {
                children
            }
        </AuthProvider.Provider>
    );
};

export default UserContext;