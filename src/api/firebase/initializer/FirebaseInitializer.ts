import { GoogleAuthProvider, Auth } from 'firebase/auth';

type FirebaseInitializer = {
    firebase: Auth,
    googleProvider: GoogleAuthProvider
}

export default FirebaseInitializer;