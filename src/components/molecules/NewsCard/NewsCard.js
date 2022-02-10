import React, { useState } from 'react';
import png from '../../../assets/styles/img/logoNBA.png';
import {
  Wrapper,
  StyledCard,
  Image,
  StyledCardBody,
  StyledSpan,
  StyledButton,
  StyledP
} from './NewsCard.styles';

const NewsCard = () => {
  return (
    <Wrapper>
      <StyledCard>
        <div>
          <Image src={png} alt='rover' />
        </div>
        <StyledCardBody>
          <StyledSpan>Technology</StyledSpan>
          <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
          <StyledP>An exploration into the truck's polarising design</StyledP>
          <div>
            <StyledButton>Read more </StyledButton>
          </div>
        </StyledCardBody>
      </StyledCard>
    </Wrapper>
  );
};

export default NewsCard;
