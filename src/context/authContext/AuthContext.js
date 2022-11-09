import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
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
    // signIn width email password
    const emailPasswordLogin = (email, password) => {
        console.log('email is', email, password)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //update user profile
    const setDisplayNameAndPhotoUrl = (updateInfo) => {
        return updateProfile(auth.currentUser, updateInfo)
    }
    // log out function 
    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }
    // take user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })

        return () => unsubscribe()
    }, [])
    const authInfo = {
        user,
        signUpWithGoogle,
        signUpWidthEmailPassword,
        logOut,
        setDisplayNameAndPhotoUrl,
        emailPasswordLogin,
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;