import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_P,
    storageBucket: process.env.REACT_APP_S,
    messagingSenderId: process.env.REACT_APP_M,
    appId: process.env.REACT_APP_APPID
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };