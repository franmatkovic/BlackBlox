import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6SB-OQyTiZToDR__aGM_r1Bb-q7CznuE",
  authDomain: "blackblox-9865e.firebaseapp.com",
  projectId: "blackblox-9865e",
  storageBucket: "blackblox-9865e.appspot.com",
  messagingSenderId: "4264201959",
  appId: "1:4264201959:web:2f4f5d3d33b17f875d1c42",
  measurementId: "G-HJWB2CE04L",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
