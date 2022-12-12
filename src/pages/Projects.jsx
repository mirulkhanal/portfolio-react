import { useContext } from 'react';
import Profile from '../components/projects/Profile';
import ProjectItem from '../components/projects/ProjectItem';
import { GithubContext } from '../context/GithubContext';

const Projects = () => {
  const { repos } = useContext(GithubContext);

  return (
    <div className='w-full h-full p-2 text-white bg-primary-dark'>
      <Profile />
      <div className='flex flex-col gap-2 my-2 project-list'>
        {repos &&
          repos.map((repo) => <ProjectItem repo={repo} key={repo.id} />)}
      </div>
    </div>
  );
};

export default Projects;
