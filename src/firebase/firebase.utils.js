import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
 
    apiKey: "AIzaSyC0iDCR6aJlEucbha11Hvqg05MECk0jLSs",
    authDomain: "crwn-db-19016.firebaseapp.com",
    projectId: "crwn-db-19016",
    storageBucket: "crwn-db-19016.appspot.com",
    messagingSenderId: "733379145428",
    appId: "1:733379145428:web:cccd7881ea8e9d3f111541"
     
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;