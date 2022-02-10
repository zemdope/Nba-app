import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Wrapper } from './Standings.styles';
import { StandingsTable } from './Standings.styles';
import TeamStanding from '../components/molecules/TeamStanding/TeamStanding';

const Standings = (props) => {
  const [standingsData, setStandingsData] = useState([]);

  const handleGetfwerg = () => {
    setStandingsData(!standingsData);
  };
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/standings/standard/2021/conference/east',
      headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '384f5fdd59msh8044fc1c58189a5p14efcdjsn9147742562dc'
      }
    };

    axios
      .request(options)
      .then(function ({
        data: {
          api: { standings }
        }
      }) {
        setStandingsData(standings);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      <StandingsTable>
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Team</Th>
            <Th>Win</Th>
            <Th>loss</Th>
          </Tr>
        </Thead>
        <Tbody>
          {standingsData.length
            ? standingsData.slice(0, 9).map((data, i) => (
                <Tr>
                  <Td>{i ? i + 1 : 1}</Td>
                  <TeamStanding key={data.teamId} standingsData={data} />
                </Tr>
              ))
            : null}
        </Tbody>
      </StandingsTable>
    </Wrapper>
  );
};
export default Standings;
