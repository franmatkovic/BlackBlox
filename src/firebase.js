import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQ2J2Os8W5XmDwlf7CL2mhNQJuSkhQLV0",
  authDomain: "blackbox-7098d.firebaseapp.com",
  projectId: "blackbox-7098d",
  storageBucket: "blackbox-7098d.appspot.com",
  messagingSenderId: "620583095924",
  appId: "1:620583095924:web:7487fb114d1c3f7de60b21",
  measurementId: "G-1L75WHMV0N",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
