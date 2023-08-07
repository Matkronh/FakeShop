import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: '',
  authDomain: 'fakeshop-c3103.firebaseapp.com',
  projectId: 'fakeshop-c3103',
  appId: "1:1062737401479:web:d9cdf6024891467c670a22"
};

firebase.initializeApp(firebaseConfig);


export default firebase;
