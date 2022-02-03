import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
const StyledButton = styled.button`
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

  @media (min-width: ${({ theme }) => theme.mobileL}) and (min-height: 800px) {
    height: 9rem;
    width: 9rem;
  }
  @media (min-width: ${({ theme }) => theme.mobileXL}) {
    height: 12rem;
    width: 12rem;
    font-size: 1.5rem;
  }

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
`;

const Conteiner = styled.div`
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

const Wrapper = styled.div`
  transform: translateY(0%);
  margin: 30px;
`;

const Start = () => {
  const a = React.useRef(null);
  const b = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(1);

  const handleOnClick = () => {
    currentSlide === 1 ? setCurrentSlide(2) : setCurrentSlide(1);
    b.current.play();
  };
  React.useEffect(() => {
    b.current = gsap.timeline({ paused: true });

    if (b.current) {
      b.current.to([a.current], {
        y: '-250%',
        duration: 0.5
      });
    }
  }, [currentSlide]);

  let navigate = useNavigate();
  const routeChange = (e) => {
    let idButton = e.target.id;

    setTimeout(() => {
      if (idButton == 1) {
        let path = `games`;
        navigate(path);
      } else if (idButton == 2) {
        let path = `standings`;
        navigate(path);
      } else if (idButton == 3) {
        let path = `news`;
        navigate(path);
      } else {
        let path = `contact`;
        navigate(path);
      }
    }, 500);
  };

  return (
    <Wrapper>
      <Conteiner ref={a}>
        <StyledButton
          onClick={(e) => {
            routeChange(e);
            handleOnClick();
          }}
          id={1}>
          Games
        </StyledButton>

        <StyledButton
          onClick={(e) => {
            routeChange(e);
            handleOnClick();
          }}
          id={2}>
          Standings
        </StyledButton>

        <StyledButton
          onClick={(e) => {
            routeChange(e);
            handleOnClick();
          }}
          id={3}>
          News
        </StyledButton>

        <StyledButton
          onClick={(e) => {
            routeChange(e);
            handleOnClick();
          }}
          id={4}>
          Contact
        </StyledButton>
      </Conteiner>
    </Wrapper>
  );
};

export default Start;
