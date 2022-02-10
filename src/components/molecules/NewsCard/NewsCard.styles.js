import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 260px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const StyledCardBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
`;

export const StyledSpan = styled.span`
  background: ${({ theme }) => theme.roseColor};
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: white;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.violetColor};
  }
`;

export const StyledButton = styled.button`
  width: 160px;
  height: 35px;
  margin-right: 10px;
  border: 1px solid black;

  background-color: ${({ theme }) => theme.violetColor};
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.roseColor};
  }
`;

export const Wrapper = styled.div``;
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledA = styled.a`
  color: white;
`;
