import { auth } from './fbase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import Test from './Test';

import DateSelection from './DateSelection';
import Birthday from './Birthday';
import Progressbar from './Progressbar';
import CountUp from './CountUp';

import DeepLink from './DeepLink';
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import BankList from './BankList';

import Accordion from './Accordion';

function App() {
  //구글 로그인관련 변수
  const [userData, setUserData] = useState(null);
  //숫자 증가 애니메이션 변수(end, start, duration)
  const countValue = CountUp(100, 0, 2000);

  //클립보드 
  const account = process.env.REACT_APP_ACCOUNT;

  const contents ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur";

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
      <div>
        <p>Count: {countValue}</p>
        <p>Count: {CountUp(120034, 0, 1000)}</p>
        <p>Count: {CountUp(3000, 0, 1000)}</p>
        <p>Count: {CountUp(305000, 0, 1000)}</p>
      </div>
      <div>
        <CopyToClipboard
          text={account}
          onCopy={() => alert("클립보드에 복사되었습니다.")}>
            <text>게좌 복사하기</text>
        </CopyToClipboard>
      </div>
      <div>
        <DeepLink/>
      </div>
      <div>
        <BankList/>
      </div>
      <div>
        <Accordion title="#1 아코디언" contents={contents} />
      </div>
      <div>
        <LineProgress/>
      </div>
    </div>
  );
}

export default App;