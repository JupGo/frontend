import React from 'react';
import styled from 'styled-components';

import { IcAlbum, IcCamera } from '../asset/icon';
import mainDefaultImg from '../asset/image/mainDefaultImg.png';
import subDefaultImg1 from '../asset/image/subDefaultImg1.png';
import subDefaultImg2 from '../asset/image/subDefaultImg2.png';
import subDefaultImg3 from '../asset/image/subDefaultImg3.png';
import subDefaultImg4 from '../asset/image/subDefaultImg4.png';
const Authentication = () => {
  return (
    <Root>
      <AuthenticationHeader>
        <Title>줍Go 인증</Title>
      </AuthenticationHeader>
      <MainImage src={mainDefaultImg} />
      <SubImagesWrapper>
        <SubImage src={subDefaultImg1} />
        <SubImage src={subDefaultImg2} />
        <SubImage src={subDefaultImg3} />
        <SubImage src={subDefaultImg4} />
      </SubImagesWrapper>
      <ButtonWrapper>
        <AlbumButton>
          <IcAlbum />
        </AlbumButton>
        <CameraButton>
          <IcCamera />
        </CameraButton>
      </ButtonWrapper>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthenticationHeader = styled.div`
  height: 93px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.green_dark};
  padding-top: 59px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: white;

  display: flex;
  justify-content: center;
`;

const MainImage = styled.img`
  height: 328px;
  width: 328px;

  margin-top: 69px;
`;

const SubImagesWrapper = styled.div`
  width: 328px;

  display: flex;
  justify-content: space-around;

  margin-top: 29px;
`;

const SubImage = styled.img`
  height: 61px;
  width: 61px;
`;

const ButtonWrapper = styled.div`
  width: 328px;

  display: flex;
  justify-content: space-around;

  margin-top: 45px;
  padding: 0 24px;
`;

const AlbumButton = styled.button`
  height: 110px;
  width: 110px;

  border-radius: 50%;

  border: none;
  background-color: ${({ theme }) => theme.colors.green_main};
`;
const CameraButton = styled.button`
  height: 110px;
  width: 110px;

  border-radius: 50%;

  border: none;
  background-color: ${({ theme }) => theme.colors.green_main};
`;

export default Authentication;
