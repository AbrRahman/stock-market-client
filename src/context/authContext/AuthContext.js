import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext } from 'react';
import { app } from '../../firebase/firebase.config';
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
    const user = { name: 'ab rahman' }
    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider();

    // google sign up
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    // signup Width email password
    const signUpWidthEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        signUpWithGoogle,
        signUpWidthEmailPassword,
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;