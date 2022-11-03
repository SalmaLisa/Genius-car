import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading]=useState(true)
  
  //create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  //login
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  //googleSignIn
  const googleSignIn = () => {
    return signInWithPopup(auth,googleProvider)
  }
  //facebookSignIn 
  const facebookSignIn = () => {
    return signInWithPopup(auth,facebookProvider)
  }

  //logout
  const logout = () => {
    return signOut(auth)
  }

  //password reset
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth,email)
  }

  //user monitor
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser === null||currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    resetPassword,
    googleSignIn,
    facebookSignIn,
    logout
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;