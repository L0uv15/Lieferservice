import React from "react";
import useFirebaseInitializer from "../initializer/useFirebaseInitializer";
import CloudFunctions from "./CloudFunctions";
import signInWithGooglePopup from "./functions/sign-in/signInWithGooglePopup";
import { signOut } from "firebase/auth";
import ApiError from "../../utility/error/ApiError";
import useToastContext from "../../../context/toast/useToastContext";

/**
 * @warning See _NOTE.md: any direct firebase calls are replaced by cloud-functions calls within useQueries
 * @returns CloudFunctions
 */
export default function useCloudFunctions(): CloudFunctions {

    const { firebase, googleProvider } = useFirebaseInitializer();
    const { dispatchError, dispatchSuccess } = useToastContext();

    const signInWithEmailAndPassword = React.useCallback(() => { }, []);
    const signUpWithEmailAndPassword = React.useCallback(() => { }, []);

    const signInWithGoogle = React.useCallback(async () => {
        const result = await signInWithGooglePopup({ auth: firebase, provider: googleProvider });
        if (result instanceof ApiError) {
            const error = result.getError();
            return dispatchError({ primaryContent: error.errorMessage, title: error.errorTitle });
        }
        dispatchSuccess({ primaryContent: "Anmeldung erfolgreich!" });
    }, [firebase, googleProvider]);

    const signOutUser = React.useCallback(async () => await signOut(firebase), [firebase]);

    return {
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithGoogle,
        signOutUser,
    }
}