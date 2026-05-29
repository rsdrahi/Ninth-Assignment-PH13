import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#101727] text-white px-6 py-10'>
      <div className='grid grid-cols-3'>
        <div className='left-side'>
          <Image
            src={'/asset/logo.png'}
            alt='Logo Image'
            height={40}
            width={40}
            className='rounded-full'
          />
          <p>DocAppoint helps patients easily book doctor appointments online with a fast, secure, and user-friendly healthcare platform.</p>
        </div>
        <div className='middle-side space-y-4'>
          <h5>About Us</h5>
          <ul className='space-y-4 opacity-60'>
            <li><Link href="#" className='hover:underline'>About</Link></li>
            <li><Link href="#" className='hover:underline'>All Appointment</Link></li>
            <li><Link href="#" className='hover:underline'>Dashboard</Link></li>
          </ul>
        </div>
        <div className='social-side flex gap-3 cursor-pointer items-center space-y-4'>
          <h5>Social Links</h5>
          <FaGithub></FaGithub>
          <FaGoogle></FaGoogle>
          <FaTwitter></FaTwitter>
        </div>
      </div>
    </div>
  );
};

export default Footer;