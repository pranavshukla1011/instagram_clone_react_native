import firebase from 'firebase';

/*
API keys for Firebase are different from typical API keys: Unlike how API keys are typically used, API keys for Firebase services are not used to control access to backend resources; that can only be done with Firebase Security Rules. Usually, you need to fastidiously guard API keys (for example, by using a vault service or setting the keys as environment variables); however, API keys for Firebase services are ok to include in code or checked-in config files.

If you use password-based Firebase Authentication and someone gets hold of your API key, they will not be able to access any of your Firebase project's database or Cloud Storage data as long as this data is protected by Firebase Security Rules. They could, however, use your API key to access Firebase's authentication endpoints and make authentication requests against your project.
*/

const firebaseConfig = {
  apiKey: 'AIzaSyCKRZ9R4BaHNcz_hMbOR-f_P8JHSnnL0_k',
  authDomain: 'instagram-clone-3e123.firebaseapp.com',
  projectId: 'instagram-clone-3e123',
  storageBucket: 'instagram-clone-3e123.appspot.com',
  messagingSenderId: '573490979326',
  appId: '1:573490979326:web:9d78c798fb9401cc72e0af',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
