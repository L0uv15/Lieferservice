const firebaseConfig = {
    apiKey: String(import.meta.env.VITE_FB_KEY),
    authDomain: String(import.meta.env.VITE_FB_AUTH_DOMAIN),
    projectId: String(import.meta.env.VITE_FB_PROJECT_ID),
    storageBucket: String(import.meta.env.VITE_FB_STORAGE_BUCKET),
    messagingSenderId: String(import.meta.env.VITE_FB_MESSAGING_SENDER_ID),
    appId: String(import.meta.env.VITE_FB_APP_ID),
    measurementId: String(import.meta.env.VITE_FB_MEASUREMENT_ID)
};

export default firebaseConfig;