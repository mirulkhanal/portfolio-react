import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './header.css';

const Socials = () => {
  return (
    <div
      id='socials'
      className=' bg-primary-green rounded-2xl w-8/12 mx-auto flex justify-evenly'>
      <BsFacebook className='text-4xl my-2 text-white' />
      <BsInstagram className='text-4xl my-2 text-white' />
      <BsTwitter className='text-4xl my-2 text-white' />
      <BsLinkedin className='text-4xl my-2 text-white' />
    </div>
  );
};

export default Socials;
