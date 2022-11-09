import React, { createContext } from 'react';

export const AuthProvider = createContext();

const UserContext = ({children}) => {
    const test = 10;
    return (
        <AuthProvider.Provider value={{test}}>
            {
                children
            }
        </AuthProvider.Provider>
    );
};

export default UserContext;