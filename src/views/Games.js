import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './Games.styles';
import Team from '../components/atoms/Team/Team';

const Games = () => {
  const [gamess, setGames] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/games/date/2022-02-05',
      headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '384f5fdd59msh8044fc1c58189a5p14efcdjsn9147742562dc'
      }
    };

    axios
      .request(options)
      .then((response) => {
        const data = response.data.api.games;
        const arr = data.map((games) => games);
        console.log(arr);
        setGames(arr);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      {gamess.length ? (
        gamess.map((game) => <Team key={game.city} gameData={game} />)
      ) : (
        <h2>nie było meczow</h2>
      )}
    </Wrapper>
  );
};

export default Games;
