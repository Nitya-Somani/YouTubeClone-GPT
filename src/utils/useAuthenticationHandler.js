import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../StoreSlices/userSlice";
import { auth } from "./firebase";

const useAuthenticationHandler = () => {
  const dispatch = useDispatch();

  const handleAuthentication = async (email, password, name, isSignIn, navigate) => {
    try {
      let userCredential;
      
      if (isSignIn) {
       console.log("signing in ...")
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://avatars.githubusercontent.com/u/116200890?v=4",
        });

        const { uid, email2, displayName, photoURL } = auth.currentUser;

        dispatch(addUser({ uid, email2, displayName, photoURL }));
        
        navigate("/");
      }

      return userCredential.user;
    } catch (error) {
      // Handle authentication errors
      console.error("Error during authentication: ", error);
      throw error; // Propagate the error to the caller
    }
  };

  return { handleAuthentication };
};

export default useAuthenticationHandler;
