import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logInWithGoogle = async() =>{
    //Destructing the response from google provider
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <label>Email</label>
      <input type="email" placeholder="Email" name="email"/>
      <label>Password</label>
      <input type="password" placeholder="Password" name="password"/>
      <button onClick={logInWithGoogle}>Sign With Google</button>
      </div>
  );
};

export default SignIn
