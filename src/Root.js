import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks/hooks';
import Burger from './components/atoms/burger/Burger';
import Menu from './components/organisms/menu/Menu';
import FocusLock from 'react-focus-lock';
import { Routes, Route } from 'react-router-dom';
import Start from './views/Start';
import News from './views/News';
import Games from './views/Games';
import Standings from './views/Standings';
import Contact from './views/Contact';

const Root = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </FocusLock>
      </div>
      <Routes>
        <Route path='/' exact element={<Start />} />
        <Route path='news' element={<News />} />
        <Route path='/games' element={<Games />} />
        <Route path='standings' element={<Standings />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
};

export default Root;
