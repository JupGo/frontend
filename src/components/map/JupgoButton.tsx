import React from 'react';
import styled from 'styled-components';

import { IcFloggingStart, IcStop, IcTemporaryPause } from '../../asset/icon';

interface JupgoButtonProps {
  btnType: string;
  handleBtnClick: React.MouseEventHandler;
}

const JupgoButton = (props: JupgoButtonProps) => {
  const { btnType, handleBtnClick } = props;

  return (
    <JupgoBtn onClick={handleBtnClick} btnType={btnType}>
      {btnType === 'floggingPause' ? (
        <IcTemporaryPause />
      ) : btnType === 'floggingStart' ? (
        <IcFloggingStart />
      ) : (
        <IcStop />
      )}
    </JupgoBtn>
  );
};

export default JupgoButton;

const JupgoBtn = styled.button<{ btnType: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 100%;

  background-color: ${({ theme, btnType }) =>
    btnType === 'floggingPause'
      ? theme.colors.gray_01
      : btnType === 'floggingStart'
      ? theme.colors.green_dark
      : theme.colors.pink};
  border: none;
  border-radius: 2rem;
`;
