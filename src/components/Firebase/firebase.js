import app from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    apiKey: "AIzaSyAI2G1hIMEqkk9B7dAIVQfbJiDjdv-MHxI",
    authDomain: "stalk-market-4dc91.firebaseapp.com",
    databaseURL: "https://stalk-market-4dc91.firebaseio.com",
    projectId: "stalk-market-4dc91",
    storageBucket: "stalk-market-4dc91.appspot.com",
    messagingSenderId: "458780571277",
    appId: "1:458780571277:web:4cac1c4df036eb5a6054c4",
    measurementId: "G-2RG24TVT9X"
  };


class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.db = app.database();
    }
  }
  export default Firebase;