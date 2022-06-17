import firebaseConfig from "@/auth/keys.json";
import firebase from "firebase/compat";

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()
