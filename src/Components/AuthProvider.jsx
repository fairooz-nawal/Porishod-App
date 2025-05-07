import React, { createContext } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


export const ContextAPI = createContext('');
const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const signUpUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUpWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    }
    const Auth ={
       signUpUser,
       signUpWithGoogle
    }
   
    return (
       <ContextAPI.Provider value={Auth}>
        {children}
       </ContextAPI.Provider>
    );
};

export default AuthProvider;