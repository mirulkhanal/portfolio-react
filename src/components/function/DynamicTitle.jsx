// import React, { useEffect, useState } from 'react';
import useTitle, { Phase } from '../../hooks/useTitle';
import cn from 'classnames';

const titles = [
  {
    title: 'A Fullstack Web Developer',
    style: 'text-pastel-red',
  },
  {
    title: 'Data Analyst',
    style: 'text-matte-yellow',
  },
  {
    title: 'Mobile App Developer',
    style: 'text-faded-pink',
  },
  {
    title: 'Python & Tensorflow Developer',
    style: 'text-python-blue',
  },
];

const DynamicTitle = () => {
  const { typedTitle, selectedTitle } = useTitle(titles);
  return (
    <span
      className={cn('font-bold text-shadow-cn', selectedTitle.style)}
      aria-label={selectedTitle}>
      {typedTitle}
    </span>
  );
};

export default DynamicTitle;

// A Fullstack Web Developer
