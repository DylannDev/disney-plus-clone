"use client";
import React, { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRedirected, setIsRedirected] = useState(false);
  const [logoutButtonClicked, setLogoutButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Update Profile Picture
  const [updatePicture, setUpdatePicture] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState(
    useEffect(() => {
      JSON.parse(localStorage.getItem("SELECTED_PICTURE"));
    }, [])
  );

  if (selectedPicture === undefined) {
    setSelectedPicture(0);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isRedirected,
        setIsRedirected,
        logoutButtonClicked,
        setLogoutButtonClicked,
        googleSignIn,
        logOut,
        loading,
        setLoading,
        updatePicture,
        setUpdatePicture,
        selectedPicture,
        setSelectedPicture,
        handleLogin,
        handleCreateUser,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
