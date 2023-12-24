import React, { useState, useEffect } from 'react';
import { Line } from 'rc-progress';

function LineProgress(props) {
  // 시작 값 설정 (예: 10000)
  const [startValue,setStartValue] = useState(props.need);
  // 입력 값 설정 (예: 1000)
  const [inputValue, setInputValue] = useState(props.give);

  // 현재 진행률 상태 변수
  const [percent, setPercent] = useState(0);

  // 진행률을 업데이트하는 함수
  const updatePercent = (newPercent) => {
    setPercent(newPercent);
  };

  useEffect(() => {
    // 시작 퍼센트는 0
    const startPercent = 0;
    // 종료 퍼센트는 입력 값에 따른 퍼센트
    const endPercent = (inputValue / startValue) * 100;

    // 애니메이션 지속 시간 (밀리초)
    const duration = 1000;
    let startTime;
    let animationFrame;

    // 애니메이션 함수
    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      // 진행률 계산
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentPercent = startPercent + progress * (endPercent - startPercent);

      // 진행률 업데이트
      updatePercent(currentPercent);

      if (progress < 1) {
        // 애니메이션이 완료되지 않았으면 계속해서 프레임 요청
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // 애니메이션 시작
    animationFrame = requestAnimationFrame(animate);

    // 컴포넌트가 언마운트되면 애니메이션을 중지
    return () => cancelAnimationFrame(animationFrame);
  }, [inputValue]); // 입력 값이 변경될 때만 실행

  return (
    <div>
      {/* 프로그레스 바 컴포넌트 */}
      <Line
        percent={percent}
        strokeWidth={3}
        strokeColor="red"
        trailWidth={3}
        trailColor="#D9D9D9"
      />
      {/* 현재 퍼센트 값을 표시하는 div */}
      <div>{Math.round(percent)}%</div>
    </div>
  );
}

export default LineProgress;
