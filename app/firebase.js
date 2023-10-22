// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhwwmMVdbx12p_yHgmJsKit0Ib2L5Qjho",
  authDomain: "disney-plus-clone-f3b53.firebaseapp.com",
  projectId: "disney-plus-clone-f3b53",
  storageBucket: "disney-plus-clone-f3b53.appspot.com",
  messagingSenderId: "1063948274872",
  appId: "1:1063948274872:web:aba3f0ddc4b341dccd784d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
