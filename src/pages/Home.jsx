import React from 'react';
import DynamicTitle from '../components/function/DynamicTitle';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <div className='relative flex flex-col gap-4 p-4 overflow-x-hidden bg-primary-dark'>
        <p className='text-base text-gray-400'>
          Welcome to my portfolio website
        </p>
        <h1 className='h-20 text-4xl text-white'>
          Hi, I’m <span className='text-primary-green'>Mirul Khanal</span>.
          <br />
          <DynamicTitle />
        </h1>

        <div className='w-full bg-primary-green rounded-4xl h-80 mt-28'>
          <img
            src='image.png'
            alt='Mirul Khanal'
            className='translate-x-16 -translate-y-36'
          />
        </div>

        <p className='p-3 m-4 text-xl text-center text-gray-400'>
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <div className='flex w-8/12 mx-auto bg-primary-green rounded-2xl justify-evenly'>
          <BsFacebook className='my-2 text-4xl text-white' />
          <BsInstagram className='my-2 text-4xl text-white' />
          <BsTwitter className='my-2 text-4xl text-white' />
          <BsLinkedin className='my-2 text-4xl text-white' />
        </div>
      </div>
    </>
  );
};

export default Home;
