import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

export const ContextAPI = createContext('');
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [paid, setPaid] = useState([]);
  const [amount, setAmount] = useState(10000);
  const provider = new GoogleAuthProvider();

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signUpWithGoogle = () => {
    return signInWithPopup(auth, provider);
  }

  const signOutUser = () => {
    return signOut(auth);
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

  const handleAmount = (paybill) => {
    const remaining = amount - paybill;
    setAmount(remaining);

  }
  const Auth = {
    signUpUser,
    signUpWithGoogle,
    signInUser,
    user,
    signOutUser,
    setAmount,amount,
    handleAmount,
    paid, setPaid
  }

  return (
    <ContextAPI.Provider value={Auth}>
      {children}
    </ContextAPI.Provider>
  );
};

export default AuthProvider;