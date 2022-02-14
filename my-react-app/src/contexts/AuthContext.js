import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from 'firebase/auth';

import { auth } from '../firebase';

const AuthContext = React.createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function verifyEmail() {
    return sendEmailVerification(auth);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function emailUpdate(newEmail) {
    return updateEmail(user, newEmail);
  }

  function passwordUpdate(newPassword) {
    return updatePassword(user, newPassword);
  }

  function deleteAccount() {
    return deleteUser(user);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    emailUpdate,
    passwordUpdate,
    verifyEmail,
    deleteAccount,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
