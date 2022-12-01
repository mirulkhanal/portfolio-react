import React from 'react';

const ProjectItem = ({ repo }) => {
  const { id, name } = repo;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
