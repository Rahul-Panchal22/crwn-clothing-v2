import { useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth'

import {
  auth, 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  useEffect(()=>{
    logInWithRedirect()
  },[])


  const logInWithGoogle = async() =>{
    //Destructing the response from google provider
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }

  const logInWithRedirect = async() =>{
    const response = await getRedirectResult(auth)
    console.log("Response", response)
    if(response){
      const { user } = response
      createUserDocumentFromAuth(user)
    }
  }

  
  return (
    <div>
      <label>Email</label>
      <input type="email" placeholder="Email" name="email"/>
      <label>Password</label>
      <input type="password" placeholder="Password" name="password"/>
      <button onClick={logInWithGoogle}>Sign With Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign In</button>
      </div>
  );
};

export default SignIn
