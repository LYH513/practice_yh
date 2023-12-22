import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  width: 200px;
  border-radius: 5px;
  border: 1px solid silver;
`;

// 아코디언 헤더를 스타일링한 컴포넌트
const Header = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 32px;
  border: none;
  border-radius: 5px;
  background-color: white;
`;

// 아코디언 내용을 감싸는 컨테이너
const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

// 아코디언 내용을 스타일링한 컴포넌트
const Contents = styled.div`
  padding: 5px;
`;

function Accordion(props){
    // 부모와 자식 엘리먼트에 대한 참조를 생성
    const parentRef = useRef(null);
    const childRef = useRef(null);
    // 아코디언이 축소되었는지 여부를 관리하는 상태 변수
    const [isCollapse, setIsCollapse] = useState(false);

    const handleButtonClick = useCallback(
        (event) => {
        event.stopPropagation();
        // 참조된 엘리먼트가 없다면 종료
        if (parentRef.current === null || childRef.current === null) {
            return;
        }
        // 아코디언이 열려있는 경우 닫고, 닫혀있는 경우 열기
        if (parentRef.current.clientHeight > 0) {
            parentRef.current.style.height = "0";
            parentRef.current.style.background = "white";
        } else {
            parentRef.current.style.height = `${childRef.current.clientHeight}px`;
            parentRef.current.style.background = "white";
        }
        setIsCollapse(!isCollapse);
        },
        [isCollapse]
    );

    // 부모 엘리먼트의 높이 값 (아코디언이 열려있는 경우)
    const parentRefHeight = parentRef.current?.style.height ?? "0px";

    return (
        <Container>
          {/* 헤더 클릭 시 버튼 핸들러 호출 */}
          <Header onClick={handleButtonClick}>
            {props.title}
          </Header>
          {/* 아코디언 내용을 감싸는 부모 컨테이너 */}
          <ContentsWrapper ref={parentRef}>
            {/* 아코디언 내용 */}
            <Contents ref={childRef}>{props.contents}</Contents>
          </ContentsWrapper>
        </Container>
    );
};

export default React.memo(Accordion);
