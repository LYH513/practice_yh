import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDKASbf_2s_H_vmh0UfaTcoVZ2zd158zw8",
    authDomain: "team1-4b3ca.firebaseapp.com",
    projectId: "team1-4b3ca",
    storageBucket: "team1-4b3ca.appspot.com",
    messagingSenderId: "891722785943",
    appId: "1:891722785943:web:c12b3a38e8d997cca8f5d2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };