import React, { createContext } from 'react';
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
    const user = { name: 'ab rahman' }
    const authInfo = {
        user,
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;