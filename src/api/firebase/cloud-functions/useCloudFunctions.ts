import React from "react";
import useFirebaseInitializer from "../initializer/useFirebaseInitializer";
import CloudFunctions from "./CloudFunctions";

export default function useCloudFunctions(): CloudFunctions {

    const { } = useFirebaseInitializer();

    const signInWithEmailAndPassword = React.useCallback(() => { }, []);
    const signUpWithEmailAndPassword = React.useCallback(() => { }, []);
    const signInWithGoogle = React.useCallback(() => { }, []);
    const signOutUser = React.useCallback(() => { }, [])

    return {
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithGoogle,
        signOutUser,
    }
}