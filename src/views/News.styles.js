import styled from 'styled-components';
import { ButtonStyled } from '../components/atoms/button/Button.styles';

export const ButtonNews = styled(ButtonStyled)`
  transform: ${({ isClicked }) =>
    isClicked ? 'translate(-200%, -50%)' : 'translate(-50%, -50%)'};
  opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
`;
