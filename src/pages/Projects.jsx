import { useContext } from 'react';
import ProjectItem from '../components/projects/ProjectItem';
import { RepoContext } from '../context/RepoContext';

const Projects = () => {
  const { repos } = useContext(RepoContext);
  console.log('Repositories count: ', repos);
  return (
    <div>
      {repos && repos.map((repo) => <ProjectItem repo={repo} key={repo.id} />)}
    </div>
  );
};

export default Projects;
