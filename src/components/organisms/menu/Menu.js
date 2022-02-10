import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, Link } from './Menu.styles';

const Menu = ({ open, setOpen, ...props }) => {
  const handleCloseMenu = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 50);
  };
  return (
    <StyledMenu open={open} {...props}>
      <Link onClick={handleCloseMenu} to='Nba-app'>
        Start
      </Link>
      <Link onClick={handleCloseMenu} to='Nba-app/games'>
        Games
      </Link>
      <Link onClick={handleCloseMenu} to='Nba-app/standings'>
        Stantings
      </Link>
      <Link onClick={handleCloseMenu} to='Nba-app/news'>
        News
      </Link>
      <Link onClick={handleCloseMenu} to='Nba-app/contact'>
        Contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
