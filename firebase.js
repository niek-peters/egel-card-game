// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDtlnD4x20BPai2haWgQs7fjI18fYb_rVc',
	authDomain: 'egelcardgame.firebaseapp.com',
	projectId: 'egelcardgame',
	storageBucket: 'egelcardgame.appspot.com',
	messagingSenderId: '346064601765',
	appId: '1:346064601765:web:8b4f3163a988b49577834c',
	measurementId: 'G-C5RYL4ZFJX'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
