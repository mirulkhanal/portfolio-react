import React, { useState } from 'react';
import Search from '../search/Search';
import {
  BsFillPersonBadgeFill,
  BsHddStackFill,
  BsFillDoorOpenFill,
  BsFillPersonFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdPhotos } from 'react-icons/io';
import { AiFillAppstore } from 'react-icons/ai';

const Sidebar = () => {
  const [status, setStatus] = useState(false);
  return (
    // w-[5%]
    <div
      onMouseEnter={() => setStatus(true)}
      onMouseLeave={() => setStatus(false)}
      className={`bg-primary-dark h-screen ${
        status ? 'w-1/6' : ' w-[5%] '
      } rounded-tr-md rounded-br-md transition-all duration-[400ms] delay-[50ms] `}>
      {/* title */}
      <div className='flex flex-col gap-2 title '>
        <div className='flex items-center justify-center gap-2 text-2xl title-card text-primary-green'>
          <AiFillAppstore className='mt-[7px]' />
          {status && <h1 className='pt-2 font-WorkSans'>EXPLORE</h1>}
        </div>
        <div className='w-2/4 h-1 mx-auto title-border bg-primary-green'></div>
      </div>

      {/* Divider */}
      <hr
        className={`divider bg-divider-gray ${
          status ? 'w-11/12' : 'w-7/12'
        } mx-auto my-6`}></hr>

      {/* Search component */}
      <Search open={status} />

      {/* Menu options */}
      <div
        className={`menu flex flex-col items-start m-4 ${
          status ? '' : 'gap-3'
        }`}>
        <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
          <BsHddStackFill className='text-primary-green' />
          {status && (
            <p className='text-white transition-transform delay-200'>SKILLS</p>
          )}
        </div>
        <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
          <BsFillPersonFill className='text-primary-green' />
          {status && <p className='text-white'>ABOUT ME</p>}
        </div>
        <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
          <BsFillDoorOpenFill className='text-primary-green' />
          {status && <p className='text-white'>PROJECTS</p>}
        </div>
      </div>

      {/* Divider */}
      <hr className='w-11/12 mx-auto my-6 divider bg-divider-gray'></hr>

      {/* Sub menu items */}
      <div
        className={`menu flex flex-col items-start m-4 ${
          status ? '' : 'gap-3'
        }`}>
        <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
          <IoMdPhotos className='text-primary-green' />
          {status && <p className='text-white'>GALLERY</p>}
        </div>
        <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-full hover:px-2 rounded-md'>
          <BsFillPersonBadgeFill className='text-primary-green' />
          {status && <p className='text-white'>CONTACT</p>}
        </div>
      </div>

      {/* Divider */}
      <hr className='w-4/6 mx-auto divider bg-divider-gray lg:mt-24 '></hr>

      {/* profile section */}
      <div className='profile bg-[#212423] h-10 w-11/12 mx-auto my-4 rounded-[8px] flex justify-center items-center gap-3'>
        <FaRegUserCircle className='text-xl text-primary-green' />
        {status && <p className='text-white'>Mirul Khanal</p>}
        {status && (
          <BsFillArrowRightSquareFill className='text-primary-green text-md' />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
