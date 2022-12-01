import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { Outlet } from 'react-router-dom';
import ItemDivider from './ItemDivider';
import Menu from './Menu';
import Title from './Title';

const ResponsiveSidebar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <TiThMenu
        className='absolute top-1 left-1 text-primary-green z-50'
        onClick={() => setShowMenu((prevState) => !prevState)}
      />
      <div
        className={`${
          showMenu ? '' : 'hidden-animate'
        } text-primary-green md:text-primary-gray bg-primary-dark animate-drop `}>
        <Title />
        <ItemDivider />
        <Menu />
      </div>
      <Outlet />
    </>
  );
};

export default ResponsiveSidebar;
