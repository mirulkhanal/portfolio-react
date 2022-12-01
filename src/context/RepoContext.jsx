import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const RepoContext = createContext({
  repos: [],
});

const RepoProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        'https://api.github.com/users/mirulkhanal/repos?page=1&per_page=10'
      );

      setRepos(response.data);
    };

    fetchRepos();
  }, []);
  return (
    <RepoContext.Provider value={{ repos }}>{children}</RepoContext.Provider>
  );
};

export default RepoProvider;
