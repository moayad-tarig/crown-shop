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


export const creatUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createAt = new Date();


        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating users', error.message)
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
