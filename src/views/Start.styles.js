import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.violetColor};
  color: ${({ theme }) => theme.whiteColor};
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
  flex-grow: 1;
  height: 7.5rem;
  width: 7.5rem;
  box-shadow: 0px 5px 10px -2px rgba(8, 8, 8, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, 0);
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.roseColor};
    transition: transform 0.3s ease;
    z-index: -1;
  }
  &:hover::before {
    transform: translate(0, 0);
  }

  @media only screen and (min-width: ${({ theme }) => theme.mobileL}) {
    height: 9rem;
    width: 9rem;
  }
  @media (min-width: ${({ theme }) => theme.mobileXL}) {
    height: 12rem;
    width: 12rem;
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-height: ${({ theme }) => theme.mobileXXL}) {
    gap: 25px;
  }

  @media (min-width: ${({ theme }) => theme.mobileXL}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  transform: translateY(0%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
