import React from 'react';
import {
  BsFillDoorOpenFill,
  BsFillPersonBadgeFill,
  BsFillPersonFill,
  BsHouseFill,
} from 'react-icons/bs';
import { IoMdPhotos } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='flex justify-center w-full gap-10 py-4 menu'>
      <div className='flex w-full gap-20 px-10'>
        <div className='flex flex-col gap-2 p-0 m-0'>
          <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-fit hover:px-2 rounded-md'>
            <BsHouseFill className='text-primary-green' />
            <Link to={'/'}>
              <p className='text-white transition-transform delay-200'>HOME</p>
            </Link>
          </div>
          <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-fit hover:px-2 rounded-md'>
            <BsFillDoorOpenFill className='text-primary-green' />
            <Link to={'/projects'}>
              <p className='text-white'>PROJECTS</p>
            </Link>
          </div>
          <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-max hover:px-2 rounded-md'>
            <BsFillPersonFill className='text-primary-green' />
            <Link to={'/about'}>
              <p className='text-white'>ABOUT ME</p>
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2 p-0 m-0'>
          <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
            <IoMdPhotos className='text-primary-green' />
            <Link to={'resume'}>
              <p className='text-white'>RESUME</p>
            </Link>
          </div>
          <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
            <BsFillPersonBadgeFill className='text-primary-green' />
            <Link to={'contact'}>
              <p className='text-white'>CONTACT</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
