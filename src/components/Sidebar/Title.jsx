import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';

const Title = () => {
  return (
    <div className='flex flex-col gap-2 title'>
      <div className='flex gap-2 text-2xl title-card  text-primary-green justify-center'>
        <AiFillAppstore className='mt-[7px]' />
        <h1 className='pt-2 font-WorkSans'>EXPLORE</h1>
      </div>
      <div className='w-2/4 h-1 title-border mx-auto bg-primary-green'></div>
    </div>
  );
};

export default Title;
