import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
const handleAuthentication = async (auth, email, password, isSignIn) => {
    try {
      if (isSignIn) {
   
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
      } else {
       
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
      }
    } catch (error) {
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