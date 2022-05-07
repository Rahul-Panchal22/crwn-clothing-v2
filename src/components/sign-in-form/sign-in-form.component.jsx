import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { toast } from "react-toastify";


const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }));
  };

  const logInWithGoogle = async () => {
    await signInWithGooglePopup();
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      toast.success("Login successfully");
      resetFields();
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        return toast.error("User Does not Exist");
      } else if (error.code === "auth/wrong-password") {
        return toast.error("Incorrect password for email");
      } else {
        console.log("Error", error.code);
        return error.code
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" onClick={() => {}}>
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={logInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
