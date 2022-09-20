import { initializeApp } from 'firebase/app';
import { getAnalystics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDu0heEkPgncLxvQEzrNP5vWFaHXcVVnPA',
  authDomain: 'mobilegamereview-36ec7.firebaseapp.com',
  projectId: 'mobilegamereview-36ec7',
  storageBucket: 'mobilegamereview-36ec7.appspot.com',
  messagingSenderId: '512147019903',
  appId: '1:512147019903:web:632482c485b0e3dd38874a',
  measurementId: 'G-GJBBEGSN9V',
  databaseURL: 'https://mobilegamereview.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalystics(app);
const database = getDatabase(app);
