import React from 'react';
import styled from 'styled-components';

const tempResponse = {
  statusCode: 200,
  message: '특정 나무의 기록 조회 성공',
  data: [
    {
      id: 1,
      name: '이삭나무',
      diaries: [
        {
          id: 117,
          date: '2022-12-21',
          location: '안산시 상록구',
          distance: 7100,
          duration: '1:17:04',
          photo: '../subDefaultImg3.png',
        },
        {
          id: 32,
          date: '2022-7-11',
          location: '서울시 중랑구',
          distance: 3720,
          duration: '0:37:22',
          photo: '../subDefaultImg3.png',
        },
        {
          id: 100,
          date: '2022-7-11',
          location: '서울시 중랑구',
          distance: 3720,
          duration: '0:37:22',
          photo: '../subDefaultImg3.png',
        },
        {
          id: 200,
          date: '2022-7-11',
          location: '서울시 중랑구',
          distance: 3720,
          duration: '0:37:22',
          photo: '../subDefaultImg3.png',
        },
        {
          id: 100,
          date: '2022-7-11',
          location: '서울시 중랑구',
          distance: 3720,
          duration: '0:37:22',
          photo: '../subDefaultImg3.png',
        },
      ],
    },
  ],
};

const tempResponseData = tempResponse ? tempResponse.data[0] : null;

const IC_ARROW_LEFT = '../IcArrowLeft.png';
const BG_TREE_DETAIL = '../BgTreeDetail.png';

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
      <StContent>
        <StTreeImage src={'../IcTree1Lv5.svg'} alt="나무 이미지" />
        <StTreeName>귀요미나무</StTreeName>
        <StRecordsContainer>
          {tempResponseData?.diaries.map((record) => {
            return (
              <StRecordAndDivider key={record.id}>
                <StRecord>
                  <StPloggingContent>
                    <StPloggingDate>{record.date}</StPloggingDate>
                    <StPloggingPlace>{record.location}</StPloggingPlace>
                    <StPloggingDistanceAndTimeLabel>플로깅한 거리</StPloggingDistanceAndTimeLabel>
                    <StPloggingDistanceAndTime>
                      <span>{record.distance / 1000}</span> km
                    </StPloggingDistanceAndTime>
                    <StPloggingDistanceAndTimeLabel>플로깅한 시간</StPloggingDistanceAndTimeLabel>
                    <StPloggingDistanceAndTime>
                      {Number.parseInt(record.duration.split(':')[0]) ? (
                        <React.Fragment>
                          <span>{record.duration.split(':')[0]}</span>시간&nbsp;
                        </React.Fragment>
                      ) : null}
                      <span>{record.duration.split(':')[1]}</span>분&nbsp;
                      <span>{record.duration.split(':')[2]}</span>초
                    </StPloggingDistanceAndTime>
                  </StPloggingContent>
                  <StPloggingPhoto src={record.photo} />
                </StRecord>
                <StRecordDivider></StRecordDivider>
              </StRecordAndDivider>
            );
          })}
        </StRecordsContainer>
      </StContent>
    </StRoot>
  );
};

const StRoot = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-image: url(${BG_TREE_DETAIL});
  background-position: center;
  background-size: cover;
`;

const StTopBar = styled.section`
  width: 100%;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StPreviousPageButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1.5rem;
`;

const StPreviousPageButtonImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const StTitleLabel = styled.h2`
  font: ${({ theme }) => theme.fonts.Jupgo_Bold_20};
`;

const StContent = styled.section`
  height: calc(100vh - 3.3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTreeImage = styled.img`
  height: 9rem;
  margin-top: 2.2rem;
`;

const StTreeName = styled.h4`
  background-color: ${({ theme }) => theme.colors.green_light};
  font: ${({ theme }) => theme.fonts.Jupgo_Bold_15};
  line-height: 1.5rem;
  border-radius: 1.4rem;
  margin-top: 2.6rem;
  padding: 0.6rem 4rem;
`;

const StRecordsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: white;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  margin-top: 2.7rem;
  overflow-y: scroll;
`;

const StRecordAndDivider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
`;

const StRecord = styled.div`
  width: 100%;
  height: calc(100% - 0.1rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
`;

const StPloggingContent = styled.div`
  & span {
    font: ${({ theme }) => theme.fonts.Jupgo_Bold_20};
  }
`;

const StPloggingDate = styled.div`
  font: ${({ theme }) => theme.fonts.Jupgo_Medium_12};
`;

const StPloggingPlace = styled.div`
  font: ${({ theme }) => theme.fonts.Jupgo_Medium_12};
  color: ${({ theme }) => theme.colors.gray_01};
  margin-top: 0.4rem;
`;

const StPloggingDistanceAndTimeLabel = styled.div`
  font: ${({ theme }) => theme.fonts.Jupgo_Medium_12};
  margin-top: 1.5rem;
`;

const StPloggingDistanceAndTime = styled.div`
  font: ${({ theme }) => theme.fonts.Jupgo_Medium_20};
`;

const StPloggingPhoto = styled.img`
  width: 14rem;
  height: 14rem;
`;

const StRecordDivider = styled.div`
  width: calc(100% - 2rem);
  height: 0.1rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gray_02};
`;

export default TreeDiaryOneTree;
