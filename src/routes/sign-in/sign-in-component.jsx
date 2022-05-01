import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
  const logInWithGoogle = async () => {
    //Destructing the response from google provider
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logInWithGoogle}>Sign With Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
