import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD2CQ-Ve_OPrNOCemVPZvAskqRdM2T8oiw",
  authDomain: "rneasyauthenticationtutorial.firebaseapp.com",
  projectId: "rneasyauthenticationtutorial",
  storageBucket: "rneasyauthenticationtutorial.appspot.com",
  messagingSenderId: "313926500993",
  appId: "1:313926500993:web:f78cb85ab3cc4dcf468380"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)