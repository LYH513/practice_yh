import { useState } from 'react';
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import styled from 'styled-components';

const Circle = styled(CircularProgressBar)`
    position: absolute;
`
const Text = styled.span`
  position: relative;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: orange;
  font-size: 30px;
`

const Div = styled.div`
    margin-top: 50px;
`
function Progressbar() {
    //빌리는 사람이 설정하는 돈- 이만큼 빌려줘
    const [giveme, setGiveme] = useState(10000);
    //빌려주는 사람이 입력하는 금액 - 이만큼 빌려줄게
    const [inputValue, setInputValue] = useState(0);
    //화면에 표시될 퍼센티지값
    const [calculatedPercent, setCalculatedPercent] = useState(0);

    const handleFormSubmit = (e) => {
      e.preventDefault();
      // 확인 버튼을 눌렀을 때만 퍼센트 계산
      const parsedValue = parseFloat(inputValue);
      if (!isNaN(parsedValue)) {
        //소수점 첫째짜리까지만 남음
        const percent = Math.round((parsedValue / giveme) * 1000) / 10
        setCalculatedPercent(calculatedPercent+ percent);
      }
    };

    // 버튼 비활성화 여부 계산
     const isButtonDisabled = calculatedPercent >= 100;

  return (
    <div>
        <Circle
            colorCircle={isButtonDisabled? "orange":"#ededed"}
            colorSlice="orange"
            percent={calculatedPercent}
            fontColor="orange"
            round={true}
            fontSize="15px"
            textPosition="1.5rem"
            animationOff={false}
          >
            <Text>HTML</Text>
        </Circle>
        <Div>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type='number' 
                    placeholder='보낼 금액을 입력하세요' min={1}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    ></input>
                <button type='submit' disabled={isButtonDisabled}>확인</button>
            </form>
        </Div>
    </div>
  );
}

export default Progressbar;