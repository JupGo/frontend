import React from 'react';
import styled from 'styled-components';

import { IcLogo } from '../asset/icon';
import { KakaoMap, RunningControl } from '../components/map';

const Map = () => {
  return (
    <StMapWrapper>
      <KakaoMap />
      <IcLogo />
      <RunningControl />
    </StMapWrapper>
  );
};

export default Map;

const StMapWrapper = styled.div`
  width: 100%;
  height: 100%;

  & > svg {
    position: absolute;
    top: 2rem;
    left: 50%;

    height: 3.064rem;

    transform: translate(-50%, 0%);

    z-index: 3;
  }

  & > section {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 3;
  }
`;
