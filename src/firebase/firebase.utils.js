import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-PYxOEFzri6nh18ksOEKbekiH_097kO4",
    authDomain: "crwn-db-d53ab.firebaseapp.com",
    databaseURL: "https://crwn-db-d53ab.firebaseio.com",
    projectId: "crwn-db-d53ab",
    storageBucket: "crwn-db-d53ab.appspot.com",
    messagingSenderId: "123575866428",
    appId: "1:123575866428:web:7af63dcb8bc07f2bae9f39",
    measurementId: "G-E76ZXLZNVZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
