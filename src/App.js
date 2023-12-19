import { auth } from './fbase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import Test from './Test';

import DateSelection from './DateSelection';
import Birthday from './Birthday';
import Progressbar from './Progressbar';


function App() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      
      <Test></Test>
      <button onClick={handleGoogleLogin}>Login</button>
      {userData ? userData.displayName : null}
      {userData ? userData.email : null}
      

      <div>
        <DateSelection />
      </div>
      <div>
        <Birthday/>
      </div>
      <div>
        <Progressbar/>
      </div>
    </div>
  );
}

export default App;