import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    //createuser
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signin
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //google login
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    //logOut
    const logOut = () => {
      return signOut(auth);
    };
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('userinside state chagnge', currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);
    const authInfo = { user, providerLogin, logOut, createUser, signIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;