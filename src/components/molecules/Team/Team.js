import React from 'react';

import {
  Wrapper,
  StyledTeamContainer,
  Logo,
  StyledP,
  StyledName,
  Span
} from './Team.styles';

const Team = ({
  gameData: {
    hTeam: { score },
    hTeam,
    vTeam
  }
}) => {
  return (
    <Wrapper>
      <StyledTeamContainer>
        <Logo src={hTeam.logo} />
        <StyledName>{hTeam.shortName}</StyledName>
        <StyledP>{score.points}</StyledP>
      </StyledTeamContainer>
      <Span>Final</Span>
      <StyledTeamContainer>
        <Logo src={vTeam.logo} />
        <StyledName>{vTeam.shortName}</StyledName>
        <StyledP>{vTeam.score.points}</StyledP>
      </StyledTeamContainer>
    </Wrapper>
  );
};

export default Team;
