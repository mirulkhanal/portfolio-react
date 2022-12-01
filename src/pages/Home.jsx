import React from 'react';
import DynamicTitle from '../components/function/DynamicTitle';
import Header from '../components/function/Header';

const Home = () => {
  return (
    <>
      <div className='relative flex flex-col bg-primary-dark gap-4 p-4 overflow-x-hidden'>
        <p className='text-base text-gray-400'>
          Welcome to my portfolio website
        </p>
        <h1 className='text-4xl text-white h-20'>
          Hi, I’m <span className='text-primary-green'>Mirul Khanal</span>.
          <br />
          <DynamicTitle />
        </h1>

        <div className='bg-primary-green rounded-4xl h-80 w-full mt-28'>
          <img
            src='image.png'
            alt='Mirul Khanal'
            className=' -translate-y-36 translate-x-16'
          />
        </div>

        <p className='p-3 text-xl text-gray-400 text-center m-4'>
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <Header />
      </div>
    </>
  );
};

export default Home;
