import React from 'react';

const MenuItem = ({ title }) => {
  return (
    <>
      <div className='flex items-center gap-6 cursor-pointer item font-WorkSans hover:bg-[#212423] w-fit hover:px-2 rounded-md'>
        {/* <Icon className='text-primary-green' /> */}
        <p className='text-white transition-transform delay-200'>{title}</p>
      </div>
    </>
  );
};

export default MenuItem;
