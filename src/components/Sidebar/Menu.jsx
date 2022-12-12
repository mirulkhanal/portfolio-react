import React from 'react';
import {
  BsFillDoorOpenFill,
  BsFillPersonBadgeFill,
  BsHouseFill,
} from 'react-icons/bs';
import { IoMdPhotos } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='flex justify-center w-full gap-10 py-4 menu'>
      <div className='flex w-full gap-20 px-10'>
        <div className='flex flex-col gap-2 p-0 m-0'>
          <Link to={'/'}>
            <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-fit hover:px-2 rounded-md'>
              <BsHouseFill className='text-primary-green' />
              <p className='text-white transition-transform delay-200'>HOME</p>
            </div>
          </Link>
          <Link to={'/projects'}>
            <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-fit hover:px-2 rounded-md'>
              <BsFillDoorOpenFill className='text-primary-green' />
              <p className='text-white'>PROJECTS</p>
            </div>
          </Link>
        </div>
        <div className='flex flex-col gap-2 p-0 m-0'>
          <Link to={'resume'}>
            <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
              <IoMdPhotos className='text-primary-green' />
              <p className='text-white'>RESUME</p>
            </div>
          </Link>
          <Link
            className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'
            to={'contact'}>
            <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
              <BsFillPersonBadgeFill className='text-primary-green' />
              <p className='text-white'>CONTACT</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
