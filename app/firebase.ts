import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9tbZZ6EUJ8BFwy_2Qn4vRiKTiNoc8e-g",
  authDomain: "walkwise-ai.firebaseapp.com",
  projectId: "walkwise-ai",
  storageBucket: "walkwise-ai.firebasestorage.app",
  messagingSenderId: "215253582540",
  appId: "1:215253582540:web:00f06706ee48f002d5b869",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;