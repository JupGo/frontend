import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { IcBackBtn, IcMainDefault } from '../asset/icon';
import subDefaultImg1 from '../asset/image/subDefaultImg1.png';
import subDefaultImg2 from '../asset/image/subDefaultImg2.png';
import subDefaultImg3 from '../asset/image/subDefaultImg3.png';
import subDefaultImg4 from '../asset/image/subDefaultImg4.png';
import { floggingInfoState } from '../recoil/atom';

const Authentication = () => {
  const userFile = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [images, setImages] = useState<any>();
  const [prevImage, setPrevImage] = useState<any>();
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [clickedImage, setClickedImage] = useState<string>();

  const imageDownload = useRef<HTMLAnchorElement | null>(null);

  const [floggingInfo, setFloggingInfo] = useRecoilState(floggingInfoState);
  useEffect(() => {
    console.log(floggingInfo);
  }, []);

  const getUserFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploaded(true);
    e.target.files && setImages(e.target.files[0]);
    showPrevImage(e);
  };

  const showPrevImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      resultImage && setPrevImage(resultImage);
    };
  };

  const downloadImage = () => {
    imageDownload.current && imageDownload.current.click();
  };

  const closeUpExampleImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setClickedImage(e.currentTarget.src);
  };

  useEffect(() => {
    clickedImage && setIsPopUpOpen(true);
  }, [clickedImage]);

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const completeFlogging = async () => {
    try {
      await axios.post('https://e4a3584e-23b7-4454-8b4a-a42d2d4aa74a.mock.pstmn.io/diary', {
        date: floggingInfo.date,
        location: floggingInfo.location,
        distance: floggingInfo.distance,
        duration: floggingInfo.duration,
        photo: floggingInfo.photo,
      });

      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Root>
      <AuthenticationHeader>
        <BackButton />
        <Title>줍Go 인증</Title>
        {isUploaded && <CompleteButton onClick={completeFlogging}>완료</CompleteButton>}
      </AuthenticationHeader>
      <MainImageSection>
        {isUploaded ? (
          <a download="줍Go_사진인증" href={prevImage} ref={imageDownload}>
            <MainImage src={prevImage} />
          </a>
        ) : (
          <EmptyIcon />
        )}
      </MainImageSection>
      {!isUploaded && (
        <SubImagesWrapper>
          <SubImage src={subDefaultImg1} onClick={closeUpExampleImage} />
          <SubImage src={subDefaultImg2} onClick={closeUpExampleImage} />
          <SubImage src={subDefaultImg3} onClick={closeUpExampleImage} />
          <SubImage src={subDefaultImg4} onClick={closeUpExampleImage} />
        </SubImagesWrapper>
      )}
      <ButtonWrapper isUploaded={isUploaded}>
        <div>
          {isUploaded ? (
            <DownloadButton onClick={downloadImage}>저장하기</DownloadButton>
          ) : (
            <label htmlFor="userFile">
              <AlbumButton>사진 올리기</AlbumButton>
            </label>
          )}
        </div>

        <FindButton type="file" accept="image" multiple id="userFile" ref={userFile} onChange={getUserFile} />
      </ButtonWrapper>
      {isPopUpOpen && (
        <PopUpBackGround>
          <PopUpTitleWrapper>
            <PopUpTitle>예시사진</PopUpTitle>
            <PopUpCloseButton onClick={closePopUp}>X</PopUpCloseButton>
          </PopUpTitleWrapper>
          <ClosedImage src={clickedImage} />
        </PopUpBackGround>
      )}
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 1.6rem;
`;

const AuthenticationHeader = styled.div`
  height: 9.3rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.green_dark};
  padding-top: 5.9rem;

  display: flex;
  align-items: center;
`;

const BackButton = styled(IcBackBtn)`
  margin-left: 1.6rem;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: white;

  display: flex;
  justify-content: center;

  margin-left: 12.4rem;
`;

const CompleteButton = styled.div`
  color: white;

  font-weight: 400;
  font-size: 1.8rem;
  line-height: 22.5rem;

  margin-left: 10.2rem;
`;

const MainImageSection = styled.article`
  height: 32.8rem;
  width: 32.8rem;

  margin-top: 6.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.3rem solid ${({ theme }) => theme.colors.green_dark};
  border-radius: 2rem;

  background-color: rgba(255, 255, 199, 0.5);

  overflow: hidden;
`;

const MainImage = styled.img`
  height: 32.8rem;
  width: 32.8rem;
`;

const EmptyIcon = styled(IcMainDefault)`
  height: 10rem;
  width: 10rem;
`;

const SubImagesWrapper = styled.div`
  width: 32.8rem;

  display: flex;
  justify-content: space-around;

  margin-top: 2.9rem;
`;

const SubImage = styled.img`
  height: 6.1rem;
  width: 6.1rem;
`;

const ButtonWrapper = styled.div<{ isUploaded: boolean }>`
  width: 32.8rem;

  display: flex;
  justify-content: center;

  margin-top: ${({ isUploaded }) => (isUploaded ? 13 : 45)}px;
  padding: 0 2.4rem;

  position: relative;
`;

const AlbumButton = styled.div`
  height: 7.4rem;
  width: 34.3rem;

  border-radius: 1rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.green_main};

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: white;
`;

const DownloadButton = styled.div`
  height: 7.4rem;
  width: 34.3rem;

  border-radius: 1rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.green_main};

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: white;
`;

const FindButton = styled.input`
  height: 11rem;
  width: 11rem;

  display: none;
`;

const PopUpBackGround = styled.section`
  height: 72.6rem;
  width: 100%;

  padding: 3.2rem 2.3rem 0 2.3rem;

  position: absolute;
  top: 9.3rem;

  background-color: rgba(0, 0, 0, 0.76); ;
`;

const PopUpTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PopUpTitle = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;

  color: white;

  margin-left: 13.6rem;
`;

const PopUpCloseButton = styled.div`
  height: 4rem;
  width: 4rem;

  margin-left: 8.9rem;

  background-color: white;
  color: ${({ theme }) => theme.colors.black_01};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 2rem;
  line-height: 2.7rem;

  border-radius: 1rem;
`;

const ClosedImage = styled.img`
  height: 32.8rem;
  width: 32.8rem;

  margin-top: 4rem;
`;

export default Authentication;
