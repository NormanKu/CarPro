// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVBjueH0ggxPQLLof0q2xInpfcM5nU2dw",
  authDomain: "carpro-d96f6.firebaseapp.com",
  projectId: "carpro-d96f6",
  storageBucket: "carpro-d96f6.appspot.com",
  messagingSenderId: "340935021750",
  appId: "1:340935021750:web:3b6a6f32c060abbb72c217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();
