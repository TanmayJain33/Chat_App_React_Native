import {initializeApp} from '@react-native-firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';
import {getStorage} from '@react-native-firebase/storage';
import {initializeFirestore} from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8itcYC0f4x_9dGRfLTWptOQX4KKMBvuA',
  authDomain: 'chatapp-b82da.firebaseapp.com',
  projectId: 'chatapp-b82da',
  storageBucket: 'chatapp-b82da.appspot.com',
  messagingSenderId: '738477874856',
  appId: '1:738477874856:ios:e82de5723b29684cb82c9d',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
