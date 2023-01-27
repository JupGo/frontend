import React from 'react';
import styled from 'styled-components';

// import noTreeImage from '../asset/image/BgTreeDiaryEmpty.png';
// import Router from '../components/common/Router';

const ROOT_PADDING_TOP = '53px';
const IC_HOME_BUTTON_IMAGE_SRC = '../IcHome.png';
const IC_NEXT_PAGE_IMAGE_SRC = '../IcNextPage.png';

/*
const diaries = [
  {
    id: 117,
    date: '2022.12.21',
    location: '안산시 상록구',
    distance: 7.1,
    time: '1:17:04',
    photo: 'IcTempTree',
  },
  {
    id: 80,
    date: '2022.10.3',
    location: '양평군 용문면',
    distance: 2.38,
    time: '0:26:51',
    photo: 'IcTempTree',
  },
  {
    id: 32,
    date: '2022.7.11', // YYYY.MM.DD 형식의 문자열
    location: '서울시 중랑구', // 문자열
    distance: 3.72, // 소숫점 둘째 자리 이상의 숫자
    time: '0:37:22', // HH:MM:SS 형식의 문자열
    photo: 'IcTempTree', // AWS s3(저장소) 링크
  },
  {
    id: 100,
    date: '2022.7.11', // YYYY.MM.DD 형식의 문자열
    location: '서울시 중랑구', // 문자열
    distance: 3.72, // 소숫점 둘째 자리 이상의 숫자
    time: '0:37:22', // HH:MM:SS 형식의 문자열
    photo: 'IcTempTree', // AWS s3(저장소) 링크
  },
  {
    id: 200,
    date: '2022.7.11', // YYYY.MM.DD 형식의 문자열
    location: '서울시 중랑구', // 문자열
    distance: 3.72, // 소숫점 둘째 자리 이상의 숫자
    time: '0:37:22', // HH:MM:SS 형식의 문자열
    photo: 'IcTempTree', // AWS s3(저장소) 링크
  },
  {
    id: 300,
    date: '2022.7.11', // YYYY.MM.DD 형식의 문자열
    location: '서울시 중랑구', // 문자열
    distance: 3.72, // 소숫점 둘째 자리 이상의 숫자
    time: '0:37:22', // HH:MM:SS 형식의 문자열
    photo: 'IcTempTree', // AWS s3(저장소) 링크
  },
];
*/

const myRecord = {
  distance: 17300,
  trees: [
    {
      id: 1,
      name: '벚나무',
      percentage: 20,
      photo: '../IcTempTree.png',
    },
    {
      id: 2,
      name: '사과나무',
      percentage: 40,
      photo: '../IcTempTree.png',
    },
    {
      id: 3,
      name: '달리기나무',
      percentage: 100,
      photo: '../IcTempTree.png',
    },
    {
      id: 4,
      name: '달리기나무',
      percentage: 100,
      photo: '../IcTempTree.png',
    },
  ],
};

const TreeDiaryExist = () => {
  return (
    <StRoot>
      <StTopBar>
        <StHomeButton type="button">
          <StHomeButtonImage src={IC_HOME_BUTTON_IMAGE_SRC} alt="home" />
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
        <StRecordContainer>
          <StNumberOfTrees>
            <StNumberOfTreesTitle>내가 키우는 나무</StNumberOfTreesTitle>
            <StNumberOfTreesRecord>{myRecord.trees.length}그루</StNumberOfTreesRecord>
          </StNumberOfTrees>
          <StDistanceOfPlogging>
            <StDistanceOfPloggingTitle>플로깅한 거리</StDistanceOfPloggingTitle>
            <StDistanceOfPloggingRecord>{myRecord.distance} km</StDistanceOfPloggingRecord>
          </StDistanceOfPlogging>
        </StRecordContainer>
        <StSeeAllRecordButton>전체 기록 보기</StSeeAllRecordButton>
        <StMyTreesContainer>
          {myRecord.trees.map((tree) => {
            return (
              <StMyTree key={tree.id}>
                <StMyTreeImage src={tree.photo} />
                <StMyTreeName>{tree.name}</StMyTreeName>
                <StMyTreePercentage>{tree.percentage}%</StMyTreePercentage>
              </StMyTree>
            );
          })}
          <StNextPageButton>
            <StNextPageButtonImage src={IC_NEXT_PAGE_IMAGE_SRC} />
          </StNextPageButton>
        </StMyTreesContainer>
      </StContent>
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
  padding-top: ${ROOT_PADDING_TOP};
`;

const StTopBar = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  border: 0;
  padding-left: 25px;
  border: 1px solid black;
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
  height: calc(100vh - 33px - ${ROOT_PADDING_TOP});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const StRecordContainer = styled.div`
  display: flex;
  gap: 33px;
  margin-top: 30px;
`;

const StNumberOfTrees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const StNumberOfTreesTitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`;

const StNumberOfTreesRecord = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const StDistanceOfPlogging = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const StDistanceOfPloggingTitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`;

const StDistanceOfPloggingRecord = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const StSeeAllRecordButton = styled.div`
  background-color: #b6e599;
  border-radius: 14px;
  color: white;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  padding: 7px 10px 5px 10px; // font 자체적으로 상단으로 치우친 듯..
  margin-top: 30px;
`;

const StMyTreesContainer = styled.div`
  height: calc(127px * 2 + 25px);
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 35px;
  padding: 0 20px;
  gap: 15px 25px;
`;

const StMyTree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StMyTreeImage = styled.img`
  width: 72px;
  height: 92px;
`;

const StMyTreeName = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  margin-top: 7px;
`;

const StMyTreePercentage = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
`;

const StNextPageButton = styled.button`
  width: 28px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: -7%;
  transform: translate(0, -50%);
  border: none;
  background-color: transparent;
`;

const StNextPageButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;

export default TreeDiaryExist;
