import React from 'react';

const TimelineItem = ({ item }) => {
  return (
    <li className='mb-10 ml-6'>
      <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-green rounded-full ring-8 ring-gray-900 '>
        {/* icon component here */}
      </span>
      <h3 className='flex items-center mb-1 text-lg font-semibold text-white '>
        {item.title}
      </h3>
      <time className='block mb-2 text-sm font-normal leading-none text-gray-500'>
        {item.date}
      </time>
      <p className='mb-4 text-base font-normal text-gray-400'>
        {item.description}
      </p>
    </li>
  );
};

export default TimelineItem;
