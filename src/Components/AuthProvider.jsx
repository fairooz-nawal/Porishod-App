import React, { createContext,useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


export const ContextAPI = createContext('');
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const signUpUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const signUpWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            console.log(currentUser);
            setUser(currentUser);
          } else {
           setUser(null)
          }
        });
        return () => {
          unsubscribe();
        };
      }, []); 

    const Auth ={
       signUpUser,
       signUpWithGoogle,
       signInUser,
       user
    }
   
    return (
       <ContextAPI.Provider value={Auth}>
        {children}
       </ContextAPI.Provider>
    );
};

export default AuthProvider;