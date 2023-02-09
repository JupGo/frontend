import React, { useState } from 'react';
import styled from 'styled-components';

const IC_ARROW_LEFT = '../IcArrowLeft.png';

const TreeDiaryOneTree = () => {
  const handlePreviousPageButtonClick = () => {
    // 나무 여러개 있는 페이지로 이동
  };

  return (
    <StRoot>
      <StTopBar>
        <StPreviousPageButton type="button">
          <StPreviousPageButtonImage src={IC_ARROW_LEFT} alt="이전 페이지" />
        </StPreviousPageButton>
        <StTitleLabel>줍Diary</StTitleLabel>
      </StTopBar>
      <StContent></StContent>
    </StRoot>
  );
};

const StRoot = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-image: url('../BgTreeDiary.png');
  background-position: center;
  background-size: cover;
`;

const StTopBar = styled.section`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 25px;
  border: 1px solid black;
`;

const StPreviousPageButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 25px;
`;

const StPreviousPageButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;

const StTitleLabel = styled.h2``;

const StContent = styled.section`
  height: calc(100vh - 33px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TreeDiaryOneTree;
