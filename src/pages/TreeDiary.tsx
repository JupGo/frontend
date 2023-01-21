import React from 'react';
import styled from 'styled-components';

// import noTreeImage from '../asset/image/BgTreeDiaryEmpty.png';
import Router from '../components/common/Router';

const TreeDiary = () => {
  return (
    <StRoot>
      <StTopBar>
        <StHomeButton type="button">
          <StHomeButtonImage src="../IcHome.png" alt="home" />
        </StHomeButton>
      </StTopBar>
      <StContent>
        <StTitleContainer>
          <StTitle>내가 키우는 나무들</StTitle>
          <StSubTitle>
            줍Go를 통해 키우는 나무들이에요
            <br />
            나무를 눌러 기록을 확인해보세요
          </StSubTitle>
        </StTitleContainer>
        <StNoTreeLabel>
          아직 나무가 없어요!
          <br />
          나무를 키우러 가볼까요?
        </StNoTreeLabel>
        <StJupGoButton type="button">LETS 줍GO!</StJupGoButton>
      </StContent>
    </StRoot>
  );
};

const StRoot = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-image: url('../BgTreeDiaryEmpty.png');
  background-position: center;
  position: relative;
  padding-top: 53px;
`;

const StTopBar = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  border: 0;
  padding-left: 25px;
`;

const StHomeButton = styled.button`
  background-color: transparent;
  padding: 3px;
  border: none;
`;

const StHomeButtonImage = styled.img`
  width: 27px;
  height: 27px;
`;

const StContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 47px;
`;

const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15%;
  gap: 10px;
`;

const StTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 34px;
  text-align: center;
`;

const StSubTitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  margin-top: 10px;
`;

const StNoTreeLabel = styled.div`
  position: absolute;
  bottom: 30%;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
`;

const StJupGoButton = styled.button`
  width: 166px;
  height: 46px;
  position: absolute;
  bottom: 20%;
  background-color: #b6e599;
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  font-size: 25px;
  line-height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 5px;
`;

export default TreeDiary;
