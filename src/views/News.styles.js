import styled from 'styled-components';
import { ButtonStyled } from '../components/atoms/button/Button.styles';
import { scaleKeyframe } from '../components/atoms/keyframes/ScaleKeyframe.styles';

export const ButtonNews = styled(ButtonStyled)`
  transform: ${({ isClicked }) =>
    isClicked ? 'translate(-400%, -50%)' : 'translate(-50%, -50%)'};
  opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100vh;
  margin: 150px 10px 0 10px;
  transform: scale(0);
  animation: ${({ isClicked }) => (isClicked ? scaleKeyframe : null)} 0.5s 1s
    forwards;
`;
export const Container = styled.div``;
