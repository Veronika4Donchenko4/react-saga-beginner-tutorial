// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBVfNWB0tAp9VQvdjJIwI8Vmmc5BswhZBo',
	authDomain: 'todo-4bdd8.firebaseapp.com',
	projectId: 'todo-4bdd8',
	storageBucket: 'todo-4bdd8.appspot.com',
	messagingSenderId: '488721358684',
	appId: '1:488721358684:web:81214527d0155dc2dbab99'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
