# 연습 중
## 페이지 설명
+ fbase.js - 파이어베이스 연결
+ DateSelection.js - 캘린더 기능
+ Birthday.js - 생년월일 선택창 
+ Progressbar.js - 원형 프로그레스바 기능
+ CountUp.js - 숫자 증가 애니메이션 
+ DeepLink.js - 모바일에서 토스로 이동가능하도록 하는 기능
+ BankList.js - 은행 목록 선택창
+ Accordion.js - 아코디언 만들었어용
+ LineProgress.js - 가로 프로그레스 기능(원형아님)
+ Cprogressbar.js - 원형 프로그레스바 -> Progressbar.js 애니메이션 오류 수정 파일
+ CusCalendar.js - 기존꺼 css 하기 무서워서 캘린더 라이브러리 가져옴(현재 날짜 이전 날짜를 선택 비활성화)
+ WrightModal.js - 모달 기능

## 구글 로그인
+ 파이어 베이스 연결 
+ 참고링크: https://velog.io/@jjonggang/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B5%AC%EA%B8%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84 
+ npm i firebase

## 캘린더 
+ 참고링크: https://velog.io/@yeonsubaek/React-%EB%82%A0%EC%A7%9C-%EC%84%A0%ED%83%9D-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-1%ED%83%84
+ npm install react-icons 
+ npm install --save react-datetime
+ import 'moment/locale/ko'; // 한국어 로케일 추가-캘린더 한국어 뜨도록 
+ 1. (https://hisoit.tistory.com/72)
+ 2. (https://doooodle932.tistory.com/150)

## 원형 프로그레스바
+ npm install @tomickigrzegorz/react-circular-progress-bar
+ 참고링크: https://github.com/tomickigrzegorz/react-circular-progress-bar/tree/main

## 숫자 증가 애니메이션
+ 참고링크: https://velog.io/@leejuhwan/ReactTSuseCountUp

## 토스 딥링크
+ 참고링크: https://story.pxd.co.kr/1683
+ 딥링크 모바일에서 확인하는 방법
+ + 노트북&휴대폰 와이파이 동일한 상황에서 윈도우 powershell 열고 > ipconfig 라고 치면 ipV4 주소가 뜸. 그거 복사
+ + http://ipV4 주소:3000

## 계좌 복붙
+ 참고링크: https://toramko.tistory.com/entry/react-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%85%8D%EC%8A%A4%ED%8A%B8-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C%EC%97%90-%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0react-copy-to-clipboard
+ npm install --save react-copy-to-clipboard

## 아코디언
+ 참고링크: https://code-masterjung.tistory.com/81 

## 가로 프로그레스
+ 참고링크: https://github.com/react-component/progress
+ npm install --save rc-progress

## 원형 프로그레스2(Cprogressbar.js)
+ 기존 원형 프로그레스바는 애니메이션 상황에서 100%가 넘으면 오류 나길래 새로 만듬
+ 참고링크: https://github.com/react-component/progress
+ npm install --save rc-progress

## 캘린더 업그레이드(CusCalendar.js)
+ 참고링크: https://hisoit.tistory.com/72
+ npm install react-calendar
+ npm install moment
+ vecter.svg(캘린더 버튼 이미지) 경로를 어떻게 설정해야할지 잘 모르겠음... 일단 src 랑 같이 두면 작동함

## 모달 기능
+ 참고 링크: https://1two13.tistory.com/entry/react-react-modal-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
+ app에서 이름 props 받아오고 있음
+ npm i react-modal

## 링크만들고 복사
+ npm install react-router-dom