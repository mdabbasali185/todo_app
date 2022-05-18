
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCd9J4kk6nto_wBzkF_qTYGHsuwfezfpGc",
    authDomain: "todo-fc909.firebaseapp.com",
    projectId: "todo-fc909",
    storageBucket: "todo-fc909.appspot.com",
    messagingSenderId: "247609793064",
    appId: "1:247609793064:web:b0a081d6dc78c417ceb31d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;