import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //createuser
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //verify Email
    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser)
    }
    //signin
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //google login
    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //github login
    const loginGithub = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //logOut
    const logOut = () => {
        setLoading(true);
      return signOut(auth);
    };
    //updateProfile
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('userinside state chagnge', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);
    const authInfo = {
      user,
      providerLogin,
      logOut,
      createUser,
      signIn,
      loginGithub,
      loading,
      updateUserProfile,
      verifyEmail,
      setLoading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;