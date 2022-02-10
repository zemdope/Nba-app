import styled from 'styled-components';
import { scaleKeyframe } from '../components/atoms/keyframes/ScaleKeyframe.styles';

export const ContainerGames = styled.div`
  animation: ${({ isClick }) => (isClick ? scaleKeyframe : null)} 0.5s 1s
    forwards;
  transform: scale(0);
  @media (max-width: ${({ theme }) => theme.mobileXL}) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  margin: 130px 10px 0 10px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    align-items: center;
    margin: 0px 10px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
