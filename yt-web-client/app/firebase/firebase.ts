// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
 } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZLxEY9FJ6Dx5dSNnsKRAwG6N8MX0IGD8",
  authDomain: "neetcode-project-906c7.firebaseapp.com",
  projectId: "neetcode-project-906c7",
  messagingSenderId: "453171198814",
  appId: "1:453171198814:web:9fb5326a8ec729d0926dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
/**
 * Signs ther user in with a Google popup. 
 * @returns A promise that resolves with user's credentials.
 */

export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  }