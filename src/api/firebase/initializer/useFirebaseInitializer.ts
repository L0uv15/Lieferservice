import { initializeApp } from "firebase/app";
import FirebaseInitializer from "./FirebaseInitializer";
import firebaseConfig from "../firebaseConfig";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export default function useFirebaseInitializer(): FirebaseInitializer {
    
    const application = initializeApp(firebaseConfig);
    const firebase = getAuth(application);
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });

    return { firebase, googleProvider };

}