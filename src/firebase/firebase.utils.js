import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAf3J0rcnkdWuMJmjq1tHsUkWkndphN_dU",
    authDomain: "e-commerce-react-website.firebaseapp.com",
    projectId: "e-commerce-react-website",
    storageBucket: "e-commerce-react-website.appspot.com",
    messagingSenderId: "132193214172",
    appId: "1:132193214172:web:6cedc3cec4b067b87ade19"
};

// export const createUserProfileDocument = async(userAuth, additionalData) => {

// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
