import Firebase from '@react-native-firebase/app';
import Config from 'react-native-config';

const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  projectId: Config.FIREBASE_PROJECT_ID,
  appId: Config.FIREBASE_IOS_APP_ID, //Change to FIREBASE_ANDROID_APP_ID if running on android
};

export default Firebase.initializeApp(firebaseConfig);
