import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { IcRunning } from '../../asset/icon';
import useCouter from '../../lib/hooks/useCouter';
import useCurrentLocation from '../../lib/hooks/useCurrentLocation';
import { floggingInfoState } from '../../recoil/atom';
import { getDateParse } from '../../utils/dateParse';
import JupgoButton from './JupgoButton';

const RunningControl = () => {
  const [isFloggingPause, setIsFloggintPause] = useState(false);
  const [floggingInfo, setFloggingInfo] = useRecoilState(floggingInfoState);
  const { count, start, stop } = useCouter(0, 1000);
  const { startRecordLocation, stopRecordLocation } = useCurrentLocation();

  const { distance, duration } = floggingInfo;

  const handleFloggingStart = () => {
    start();
    startRecordLocation();
    setIsFloggintPause(!isFloggingPause);
  };
  const handleFloggingPause = () => {
    stop();
    stopRecordLocation();
    setIsFloggintPause(!isFloggingPause);
  };
  const handleFloggingStop = () => {
    stop();
    stopRecordLocation();
    setFloggingInfo({ ...floggingInfo });
  };

  return (
    <RunningControlWrapper>
      <HeaderWrapper>
        <header>
          <h1>{distance}</h1>
          <h1>km</h1>
          <IcRunning />
        </header>
        <p>{getDateParse(count).map((data, idx) => (idx !== 2 ? data + ' : ' : data))}</p>
      </HeaderWrapper>

      <article>
        {isFloggingPause ? (
          <JupgoButton btnType={'floggingPause'} handleBtnClick={handleFloggingPause} />
        ) : (
          <JupgoButton btnType={'floggingStart'} handleBtnClick={handleFloggingStart} />
        )}

        <JupgoButton btnType={'floggingStop'} handleBtnClick={handleFloggingStop} />
      </article>
    </RunningControlWrapper>
  );
};

export default RunningControl;

const RunningControlWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 94%;
  height: 14%;
  padding: 4% 8%;

  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 1rem;

  article {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 40%;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 0.5rem;

    & > h1 {
      vertical-align: bottom;
      ${({ theme }) => theme.fonts.Jupgo_Bold_32}
      :nth-child(2) {
        font-size: 2rem;
      }
    }
  }

  p {
    margin-right: 12%;

    ${({ theme }) => theme.fonts.Jupgo_Bold_20}
    color:${({ theme }) => theme.colors.gray_01};
  }
`;
