import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzHyd3UBuolOP48TM660HD6Te_pTuvp10',
  authDomain: 'mobile-game-sns-64429.firebaseapp.com',
  databaseURL: 'https://mobile-game-sns-64429-default-rtdb.firebaseio.com',
  projectId: 'mobile-game-sns-64429',
  storageBucket: 'mobile-game-sns-64429.appspot.com',
  messagingSenderId: '277877324483',
  appId: '1:277877324483:web:f73514bf038c860a568076',
  measurementId: 'G-NWTM9CX5WD',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, database, firestore };

