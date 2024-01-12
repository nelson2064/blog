// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realstate-eddfa.firebaseapp.com",
  projectId: "mern-realstate-eddfa",
  storageBucket: "mern-realstate-eddfa.appspot.com",
  messagingSenderId: "674851699683",
  appId: "1:674851699683:web:522b40c2b082b947c53ed6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);