import Firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB8itcYC0f4x_9dGRfLTWptOQX4KKMBvuA',
  databaseURL: 'https://chatapp-b82da-default-rtdb.firebaseio.com/',
  projectId: 'chatapp-b82da',
  appId: '1:738477874856:android:cf2aa224cfe8d412b82c9d',
};

export default Firebase.initializeApp(firebaseConfig);
