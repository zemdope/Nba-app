import React from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { StyledButton, Container, Wrapper } from './Start.styles';

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
      <Container ref={a}>
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
      </Container>
    </Wrapper>
  );
};

export default Start;
