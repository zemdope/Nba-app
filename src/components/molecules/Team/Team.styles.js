import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 10px;
  width: 250px;
  height: 150px;
  background-color: ${({ theme }) => theme.blueColor};
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.35);

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 330px;
    height: 200px;
    margin: 15px;
  }
`;
export const StyledTeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 45%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryDark};

  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 2rem;
  }
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 65px;
    height: 65px;
  }
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  margin: 0 10px;
  width: 20%;
  font-weight: bold;
  letter-spacing: 2px;
`;
export const StyledName = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 30%;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Span = styled.span`
  position: relative;
  font-weight: 700;
  margin-right: 50px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 110%;
    width: 40px;
    height: 1px;
    transform: translateY(-50%);
    background-color: black;
  }

  &::after {
    width: 150px;
    left: -410%;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-right: 70px;

    &::before {
      width: 60px;
    }
    &::after {
      width: 210px;
      left: -580%;
    }
  }
`;
