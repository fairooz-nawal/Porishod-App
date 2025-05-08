import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

export const ContextAPI = createContext('');
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [paid, setPaid] = useState([]);
  const [amount, setAmount] = useState(10000);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signUpWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  }

  const updateUser = (userDetail) => {
    return updateProfile(auth.currentUser, userDetail)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
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
    user, setUser,
    signOutUser,
    setAmount, amount,
    handleAmount,
    paid, setPaid,
    updateUser,
    loading,setLoading,
    resetPassword
  }

  return (
    <ContextAPI.Provider value={Auth}>
      {children}
    </ContextAPI.Provider>
  );
};

export default AuthProvider;