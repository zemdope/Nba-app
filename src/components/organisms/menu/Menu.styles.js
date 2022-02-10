import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  text-align: left;
  padding: 2rem;
  background: ${({ theme }) => theme.whiteColor};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 8;

  @media (max-width: ${({ theme }) => theme.mobileXL}) {
    width: 100%;
  }
`;
const activeclassname = 'active-link';

export const Link = styled(NavLink).attrs({ activeclassname })`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.mobileXL}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &.${activeclassname} {
    color: ${({ theme }) => theme.violetColor};
  }

  &:hover {
    color: ${({ theme }) => theme.violetColor};
  }
`;
