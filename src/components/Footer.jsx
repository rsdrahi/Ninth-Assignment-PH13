import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#101727] text-white px-6 py-10'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto'>
        <div className='left-side'>
          <Image
            src={'/asset/logo.png'}
            alt='Logo Image'
            height={40}
            width={40}
            className='rounded-full my-4'
          />
          <p className='text-sm opacity-60'>DocAppoint helps patients <br /> easily book doctor appointments online with a <br /> fast, secure, and user-friendly healthcare platform.</p>
        </div>
        <div className='middle-side space-y-4'>
          <h5>About Us</h5>
          <ul className='space-y-4 opacity-60'>
            <li><Link href="#" className='hover:underline'>About</Link></li>
            <li><Link href="#" className='hover:underline'>All Appointment</Link></li>
            <li><Link href="#" className='hover:underline'>Dashboard</Link></li>
          </ul>
        </div>
        <div className='social-side cursor-pointer items-center  space-y-4'>
          <h5>Social Links</h5>
          <div className='flex items-center gap-5'>
            <FaGithub></FaGithub>
            <FaGoogle></FaGoogle>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
      <hr className='mt-6 opacity-10  container mx-auto' />
      <div className='flex justify-between mt-6  container mx-auto'>
        <p className='opacity-60 text-sm'>© 2026 DocAppoint. All rights reserved.</p>
        <div className='flex gap-8'>
          <p><Link href="" className='hover:underline opacity-60 text-sm'>Privacy Policy</Link></p>
          <p><Link href="" className='hover:underline opacity-60 text-sm'>Terms of Service</Link></p>
          <p><Link href="" className='hover:underline opacity-60 text-sm'>Cookies</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;