// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { addDoc, collection } from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDoNV4xfi9DET1GQO3tT2BrVm5Dp9C-t5g",
	authDomain: "buybusy1.firebaseapp.com",
	projectId: "buybusy1",
	storageBucket: "buybusy1.appspot.com",
	messagingSenderId: "8830994081",
	appId: "1:8830994081:web:fae22e96ad942cf683d2e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

const auth = getAuth();

export const signUpUserWithEmailAndPassword = async (email, password) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
	return await signInWithEmailAndPassword(auth, email, password);
};
