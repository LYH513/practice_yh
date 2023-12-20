import React from 'react';

//추가해야할 것
//계좌 송금 화면까지 바로 이동?


function DeepLink() {
    const gotoApp = () => {
      // Scheme을 통해 앱을 실행하며 세팅 화면으로 이동할 거에요.
      // 앱이 설치되어있지 않은 경우 아무것도 실행되지 않아요.
      const url = 'supertoss://';
      location.href = url;
  
      // 앱이 실행되면 아래 부분은 실행하지 않게 해야 하는 부분은 생략...
  
      // 앱이 설치되어있지 않은 경우 앱을 다운로드할 것인지 사용자에게 물어보아요.
      const ua = navigator.userAgent.toLowerCase();
  
      if (window.confirm('스토어로 이동할까요?')) {
        // Confirm 확인
        location.href = ua.indexOf('android') > -1 ? 'paly store url' : 'app store url';
      } else {
        // Confirm 취소 시 무언가를 할 거라면.
      }
    };
  
    return (
      <div>
        <button onClick={gotoApp}>앱 실행</button>
      </div>
    );
  };
  
  export default DeepLink;