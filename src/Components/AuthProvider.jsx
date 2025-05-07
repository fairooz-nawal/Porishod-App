import React, { createContext } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const ContextAPI = createContext('');
const AuthProvider = ({children}) => {
    
    const signUpUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const Auth ={
       signUpUser
    }
   
    return (
       <ContextAPI.Provider value={Auth}>
        {children}
       </ContextAPI.Provider>
    );
};

export default AuthProvider;