import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
const Search = ({ open }) => {
  return (
    <div className='flex justify-center mx-auto '>
      <BiSearchAlt
        className={`text-[#898B8B] lg:absolute  ${
          open ? 'top-[105px] left-[10px]' : 'top-[96px] left-[18px]'
        } `}
      />
      <input
        className={`bg-primary-gray rounded-[8px] ${
          open ? 'w-11/12' : 'w-7/12'
        } text-center outline-none placeholder:text-[#898B8B] `}
        type='text'
        placeholder={`${open ? 'Search...' : ''}`}
      />
    </div>
  );
};

export default Search;
