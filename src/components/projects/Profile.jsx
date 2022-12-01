import React, { useContext } from 'react';
import { GithubContext } from '../../context/GithubContext';

const Profile = () => {
  const { user } = useContext(GithubContext);
  const {
    name,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
    avatar_url,
  } = user;
  return (
    <div className='flex flex-col gap-1 py-1 bg-primary-green'>
      <div className='flex justify-evenly'>
        <p className='profile-element'>Follows: {followers}</p>
        <p className='profile-element'>Followed: {following}</p>
        <p className='profile-element'>Repos: {public_repos}</p>
        <p className='profile-element'>Gists: {public_gists}</p>
      </div>
      <div className='flex flex-col gap-4 p-4 mx-2 my-1 bg-primary-gray rounded-2xl'>
        <div className='flex items-center gap-2'>
          <div className='w-10 overflow-hidden border-2 rounded-full border-primary-green'>
            <img className='w-full' src={avatar_url} alt='' />
          </div>
          <h2 className='text-lg font-bold'>{name}</h2>
        </div>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Profile;
