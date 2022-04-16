import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDgm0_pOkgDxuF9c7zLFD6LdTfgx4RdZWg",
    authDomain: "car-services-a3351.firebaseapp.com",
    projectId: "car-services-a3351",
    storageBucket: "car-services-a3351.appspot.com",
    messagingSenderId: "96697308204",
    appId: "1:96697308204:web:ab2071838016a8b5cb6d89"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;