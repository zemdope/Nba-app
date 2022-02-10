import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContainerGames, Wrapper, StyledDiv } from './Games.styles';
import { ButtonStyled } from '../components/atoms/button/Button.styles';
import Team from '../components/molecules/Team/Team';
import Loader from '../components/atoms/Loader/Loader';

const Games = () => {
  const [gamess, setGames] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const handleGetGames = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/games/date/2022-02-06',
      headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '384f5fdd59msh8044fc1c58189a5p14efcdjsn9147742562dc'
      }
    };
    axios
      .request(options)
      .then((res) => {
        const data = res.data.api.games;
        const arr = data.map((games) => games);

        setGames(arr);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      {' '}
      <ContainerGames isClick={isClick}>
        <StyledDiv>
          {gamess.length && isClick ? (
            gamess.map((game) => <Team key={game.city} gameData={game} />)
          ) : (
            <Loader />
          )}
        </StyledDiv>
      </ContainerGames>
      <ButtonStyled isClick={isClick} onClick={handleGetGames}>
        Get Games
      </ButtonStyled>
    </Wrapper>
  );
};

export default Games;
