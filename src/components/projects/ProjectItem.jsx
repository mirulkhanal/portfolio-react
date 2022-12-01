import React from 'react';

const ProjectItem = ({ repo }) => {
  const { id, name, description } = repo;
  return (
    <div className='flex flex-col gap-4 p-4 mx-auto bg-primary-green rounded-3xl'>
      <h1 className='text-2xl font-extrabold text-center capitalize'>{name}</h1>
      <img src={`/projects/${name.toLowerCase()}.jpg`} alt='' />
      <p className='text-xl text-center'>{description}</p>
    </div>
  );
};

export default ProjectItem;
