import styled, { keyframes } from 'styled-components';
import { moveRight } from '../components/atoms/keyframes/Keyframes.styles';

export const Faa = styled.div`
  color: black;
  font-size: 40px;
`;

export const Wrapper = styled.div`
  animation: ${moveRight} 0.3s forwards;
  transform: scale(0);
  @media (max-width: ${({ theme }) => theme.mobileXL}) {
    animation-delay: 0.3s;
  }
`;
