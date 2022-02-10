import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
const TeamStanding = ({ standingsData }) => {
  const [teamFullName, setTeamFullName] = useState({});

  let id = standingsData.teamId;
  let API_URL = 'https://api-nba-v1.p.rapidapi.com/teams/teamId/';
  useEffect(() => {
    const options = {
      method: 'GET',
      url: API_URL + id,
      headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '384f5fdd59msh8044fc1c58189a5p14efcdjsn9147742562dc'
      }
    };

    axios
      .request(options)
      .then(function ({
        data: {
          api: { teams }
        }
      }) {
        setTeamFullName(teams[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Td>{teamFullName.fullName}</Td>
      <Td>{standingsData.win}</Td>
      <Td>{standingsData.loss}</Td>
    </>
  );
};

export default TeamStanding;
