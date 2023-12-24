import React, { useState, useEffect } from 'react';
import { Circle } from 'rc-progress';

function Cprogressbar(props) {
  const [startValue, setStartValue] = useState(props.need);
  const [inputValue, setInputValue] = useState(props.give);
  const [percent, setPercent] = useState(0);

  const updatePercent = (newPercent) => {
    setPercent(newPercent);
  };

  useEffect(() => {
    const startPercent = 0;
    const endPercent = (inputValue / startValue) * 100;
    const duration = 1000;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentPercent = startPercent + progress * (endPercent - startPercent);

      updatePercent(currentPercent);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inputValue]);

  // 표시되는 백분율 결정
  const displayedPercent = percent > 100 ? 100 : percent;

  return (
    <div style={{ position: 'relative' }}>
      <Circle
        percent={displayedPercent}
        strokeWidth={3}
        strokeColor="red"
        trailWidth={3}
        trailColor="#D9D9D9"
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {Math.round(percent)}%
        </span>
      </div>
    </div>

  );
}

export default Cprogressbar;
