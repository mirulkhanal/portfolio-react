import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import ItemDivider from './ItemDivider';
import Menu from './Menu';
import Title from './Title';

const ResponsiveSidebar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <TiThMenu
        className='absolute top-1 left-1 text-primary-green'
        onClick={() => setShowMenu((prevState) => !prevState)}
      />
      <div
        className={`${
          showMenu ? '' : 'hidden'
        } text-primary-green md:text-primary-gray bg-primary-dark rounded-sm transition-all duration-[400ms] delay-[50ms]`}>
        <Title />
        <ItemDivider />
        <Menu />
      </div>
    </>
  );
};

export default ResponsiveSidebar;
