import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authenticate.styles.scss'

const Authenticate = () => {
  // const logInWithGoogle = async () => {
  //   //Destructing the response from google provider
  //   const { user } = await signInWithGooglePopup();
  //   createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authenticate-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authenticate;
