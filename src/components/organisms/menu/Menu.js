import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu, NavItem } from './Menu.styles';

const Menu = ({ open, setOpen, ...props }) => {
  const handleCloseMenu = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 50);
  };
  return (
    <StyledMenu open={open} {...props}>
      <NavItem onClick={handleCloseMenu} to='/'>
        Start
      </NavItem>
      <NavItem onClick={handleCloseMenu} to='/games'>
        Games
      </NavItem>
      <NavItem onClick={handleCloseMenu} to='standings'>
        Stantings
      </NavItem>
      <NavItem onClick={handleCloseMenu} to='news'>
        News
      </NavItem>
      <NavItem onClick={handleCloseMenu} to='contact'>
        Contact
      </NavItem>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
