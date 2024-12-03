import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyC3GJbFJZyIK73BSn3_sXqA2oeLFgEF-3w",
    authDomain: "blogapp-8d3f0.firebaseapp.com",
    projectId: "blogapp-8d3f0",
    storageBucket: "blogapp-8d3f0.firebasestorage.app",
    messagingSenderId: "266183192379",
    appId: "1:266183192379:web:48f825529acc57b886d11e"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
