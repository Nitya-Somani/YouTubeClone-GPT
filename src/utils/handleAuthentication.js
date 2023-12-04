import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const handleAuthentication = async (auth, email, password, isSignIn, navigate) => {
  try {
    let userCredential;

    if (isSignIn) {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    } else {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
    }

    // Navigate after successful authentication
    navigate("/");

    return userCredential.user;
  } catch (error) {
    console.log("inside handle auth console ");
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === "auth/user-not-found-Firebase") {
      throw new Error("User not found.");
    } else if (errorCode === "auth/invalid-credential - Firebase") {
      throw new Error("User credentials not found.");
    } else {
      throw new Error(`${errorCode} - ${errorMessage}`);
    }
  }
};

export default handleAuthentication;
