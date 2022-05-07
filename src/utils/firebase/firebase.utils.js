import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfEB5FL9W2w6meOoj9RySOZUTv56GVr-c",
  authDomain: "crwn-clothing-db-95b9e.firebaseapp.com",
  projectId: "crwn-clothing-db-95b9e",
  storageBucket: "crwn-clothing-db-95b9e.appspot.com",
  messagingSenderId: "185232802867",
  appId: "1:185232802867:web:46e8093bb91bfdaccfcf46",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userDocRef = await doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    //Destructing the userAuth Object
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error when creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const SignOutUser = async() => {
  return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}