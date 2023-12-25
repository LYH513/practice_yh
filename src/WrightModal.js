import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

//overlay는 모달 창 바깥 부분, content는 모달 창부분
const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "709px",
    height: "499px",
    padding: "0",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    overflow: "auto",
    border: "none",
  },
};

const ModalTitle =styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 709px;
    height: 84px;
    border-radius: 20px 20px 0px 0px;
    background: #FF3D00;
    color: #FFF;
    justify-content: center;
    border: none;

    //font-family: Pretendard;
    font-size: 24px;
    //font-style: normal;
    font-weight: 700;
    line-height: 19px;
`;

const RequestBtn =styled.button`
    display: flex;
    flex-direction: row;
    width: 694px;
    height: 51px;
    border-radius: 10px;
    background: #FF3D00;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;

    color: #FFF;
    //font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 39px;
    cursor: pointer;

    //임시로 정해둔 호버 변경이 필요함
    &:hover{
        background-color : skyblue;
        color : blue
    }
`;

const SecondModalContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SecondModalExplain =styled.div`
    display: flex;
    //width: 418px;
    height: 60px;
    text-align: center;
    margin-top: 94px;

    color: #909090;
    text-align: center;
    //font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    white-space: pre-wrap;
`;

const GoToMypageBtn = styled.button`
    display: flex;
    flex-direction: row;
    width: 321px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FF3D00;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    margin-top: 60px;

    color: #FFF;
    //font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    cursor: pointer;

    //임시로 정해둔 호버 변경이 필요함
    &:hover{
        background-color : skyblue;
        color : blue
    }
`;

function WrightModal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);

  const openModal = () => {
    //스크롤 비활성화
    document.body.style.overflow = 'hidden'; 
    setModalIsOpen(true);
  };

  const closeModal = () => {
    //스크롤 활성화
    document.body.style.overflow = 'auto'; 
    setModalIsOpen(false);
    setSecondModalIsOpen(false);
  };

  const openSecondModal = () => {
    setSecondModalIsOpen(true);
  };

  return (
    <div>
      <RequestBtn onClick={openModal}>요청하기</RequestBtn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customModalStyles}
      >
        <ModalTitle>
            머니글러브에서 {props.userName}님만의 페이지 URL을 생성했어요!
        </ModalTitle>
        <div>모달 내용</div>
        <button onClick={openSecondModal}>확인</button>
      </Modal>

      {/*체크박스 클릭시 뜨는 두번째 모달*/}
      <Modal
        isOpen={secondModalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
            ...customModalStyles,  // 기존의 스타일 유지
            overlay: {
              ...customModalStyles.overlay,  // 기존 overlay 스타일 유지
              backgroundColor: "none",  // 여기를 변경
        }}}>
        <ModalTitle>
            {props.userName}님의 글이 저장되었어요!
        </ModalTitle>
        <SecondModalContentDiv>
            <SecondModalExplain>
                마이페이지에서 자유롭게 확인이 가능합니다.<br/> 해당글은 수정이 불가능해요.
            </SecondModalExplain>
            <GoToMypageBtn onClick={closeModal}>
                마이페이지 가기
            </GoToMypageBtn>
        </SecondModalContentDiv>
      </Modal>
    </div>
  );
}

export default WrightModal;
