import styled, { keyframes } from 'styled-components';

export const loader = keyframes`

    0% { left: 0; height: 30px; width: 15px }
  50% { height: 8px; width: 40px }
  100% { left: 235px; height: 30px; width: 15px}
`;

export const StyledDiv = styled.div`
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.violetColor};
  letter-spacing: 0.2em;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.violetColor};
    position: absolute;
    animation: ${loader} 0.7s infinite alternate ease-in-out;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;
