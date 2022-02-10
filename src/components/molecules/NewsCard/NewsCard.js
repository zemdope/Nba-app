import React from 'react';
import png from '../../../assets/styles/img/logoNBA.png';
import {
  Wrapper,
  StyledCard,
  Image,
  StyledCardBody,
  StyledSpan,
  StyledButton,
  ButtonContainer,
  StyledA
} from './NewsCard.styles';

const NewsCard = ({ newsData: { source, title, url } }) => {
  return (
    <Wrapper>
      <StyledCard>
        <div>
          <Image src={png} alt='Nba logo' />
        </div>
        <StyledCardBody>
          <StyledSpan>{source}</StyledSpan>
          <h4>{title}</h4>
          <ButtonContainer>
            <StyledButton>
              <StyledA href={url}>Read more </StyledA>
            </StyledButton>
          </ButtonContainer>
        </StyledCardBody>
      </StyledCard>
    </Wrapper>
  );
};

export default NewsCard;
