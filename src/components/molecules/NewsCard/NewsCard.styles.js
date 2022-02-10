import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  margin: 10px;
  background-color: #fff;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
`;

export const StyledSpan = styled.span`
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const StyledP = styled.p`
  font-size: 13px;
  margin: 0 0 40px;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  width: 80px;
  height: 40px;
  margin-right: 10px;
`;
