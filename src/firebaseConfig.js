import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    authDomain: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    projectId: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    storageBucket: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    messagingSenderId: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    appId: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
