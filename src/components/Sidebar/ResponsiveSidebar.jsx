import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { Outlet } from 'react-router-dom';
import ItemDivider from './ItemDivider';
import Menu from './Menu';
import Title from './Title';
import cn from 'classnames';

const ResponsiveSidebar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className={'w-full'}>
      <div className='absolute z-50 p-4 m-2 rounded-full drop-shadow-md top-1 left-1 text-primary-green bg-primary-gray'>
        <TiThMenu onClick={() => setShowMenu((prevState) => !prevState)} />
      </div>

      <div
        className={cn(
          'text-primary-green md:text-primary-gray bg-primary-dark ease-in-out duration-[500ms]',
          {
            'h-0': showMenu,
            'h-[190px]': !showMenu,
          }
        )}>
        <Title />
        <ItemDivider />
        <Menu />
      </div>
      <Outlet />
    </div>
  );
};

export default ResponsiveSidebar;
