import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid black;
  padding: 13px 50px 13px;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.whiteColor};
  color: ${({ theme }) => theme.primaryDark};
  cursor: pointer;
  z-index: 1;
  transform: ${({ isClick }) =>
    isClick ? 'translate(-200%, -50%)' : 'translate(-50%, -50%)'};
  opacity: ${({ isClick }) => (isClick ? 0 : 1)};
  transition: 0.2s opacity, 1s transform ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.yellowColor};
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  &:hover::before {
    transform: translateY(0);
  }

  @media (min-width: ${({ theme }) => theme.mobileXL}) {
    font-size: 2.5rem;
  }
`;
