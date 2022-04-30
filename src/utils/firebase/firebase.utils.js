// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfEB5FL9W2w6meOoj9RySOZUTv56GVr-c",
  authDomain: "crwn-clothing-db-95b9e.firebaseapp.com",
  projectId: "crwn-clothing-db-95b9e",
  storageBucket: "crwn-clothing-db-95b9e.appspot.com",
  messagingSenderId: "185232802867",
  appId: "1:185232802867:web:46e8093bb91bfdaccfcf46",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = await doc(db, 'users', userAuth.uid)

  const userSnapShot = await getDoc(userDocRef)

  if(!userSnapShot.exists()){
    //Destructing the userAuth Object
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log("error when creating the user", error.message)
    }
  }

  return userDocRef
}