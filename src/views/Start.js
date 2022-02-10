import React from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { StyledButton, Container, Wrapper } from './Start.styles';

const Start = () => {
  const a = React.useRef(null);
  const b = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const path = ['games', 'standings', 'news', 'contact'];

  const handleOnClick = () => {
    currentSlide === 1 ? setCurrentSlide(2) : setCurrentSlide(1);
    b.current.play();
  };

  React.useEffect(() => {
    b.current = gsap.timeline({ paused: true });

    if (b.current) {
      b.current.to([a.current], {
        y: '-550%',
        duration: 0.6
      });
    }
  }, [currentSlide]);

  let navigate = useNavigate();
  const routeChange = (e) => {
    let idButton = e.target.id;

    setTimeout(() => {
      if (idButton == 1) return navigate(path[0]);
      if (idButton == 2) navigate(path[1]);
      if (idButton == 3) return navigate(path[2]);
      return navigate(path[3]);
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
