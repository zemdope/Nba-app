import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './Team.styles';

const Team = ({
  gameData: {
    city,
    hTeam: { score },
    hTeam,
    vTeam
  }
}) => {
  return (
    <Wrapper>
      <h1>{city}</h1>

      <img src={hTeam.logo} alt='' />

      <p>{hTeam.fullName}</p>
      <p>{hTeam.score.points}</p>
      <img src={vTeam.logo} alt='' />
      <p>{vTeam.fullName}</p>
      <p>{vTeam.score.points}</p>
    </Wrapper>
  );
};

export default Team;
