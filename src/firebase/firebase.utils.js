
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBybbqsKd-g86nkANnh9t23j8iBJa7xjmA",
    authDomain: "crwn-db-2cf27.firebaseapp.com",
    databaseURL: "https://crwn-db-2cf27.firebaseio.com",
    projectId: "crwn-db-2cf27",
    storageBucket: "",
    messagingSenderId: "195987587421",
    appId: "1:195987587421:web:281fbc52691a0e2600e8b4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase;