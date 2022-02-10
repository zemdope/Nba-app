import styled from 'styled-components';
import { Table } from 'react-super-responsive-table';

export const StandingsTable = styled(Table)`
  font-size: 2rem;
  Thead {
    background-color: yellow;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
