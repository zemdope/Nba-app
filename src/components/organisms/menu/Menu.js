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
      <Link onClick={handleCloseMenu} to='/'>
        Start
      </Link>
      <Link onClick={handleCloseMenu} to='/games'>
        Games
      </Link>
      <Link onClick={handleCloseMenu} to='standings'>
        Stantings
      </Link>
      <Link onClick={handleCloseMenu} to='news'>
        News
      </Link>
      <Link onClick={handleCloseMenu} to='contact'>
        Contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
