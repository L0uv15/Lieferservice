import { Auth, GoogleAuthProvider } from "firebase/auth"

type SignInWithGooglePopupProperties = {
    auth: Auth,
    provider: GoogleAuthProvider
}

export default SignInWithGooglePopupProperties;