
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdw-cyM9luXF43vIkEQCUiJSWp1BDJMV0",
  authDomain: "postpro-36d5d.firebaseapp.com",
  projectId: "postpro-36d5d",
  storageBucket: "postpro-36d5d.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "266166612177",
  appId: "1:266166612177:web:9dbdc3bd646802e1c8d5f0",
  measurementId: "G-FJPQS5G0EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics only in browser environments where it's supported
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export default app;
