import React from 'react';

//추가해야할 것
//계좌 송금 화면까지 바로 이동?


function DeepLink() {
    const gotoApp = () => {
      
      const url = 'supertoss://';
      
      if (window.confirm('토스로 이동할까요?')) {
        // Confirm 확인
        location.href = url;
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