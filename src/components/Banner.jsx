import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (

    <section className='relative mb-6 w-full'>
      <Image
        src={'/asset/Baneer.jpg'}
        alt='Banner Image'
        height={1000}
        width={800}
        className='w-full '
      />
      <div className='absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10'></div>
      <div className='absolute inset-0 flex items-center pt-16'>
        <div className='container m-auto px-6'>
          <div className='max-w-xl text-white'>
            <p className='font-medium text-cyan-400'>
              Your Health. Your Time. Your Way.
            </p>
            <h2 className='text-5xl font-bold my-3 leading-tight'>
              Instant Appointments
              <span className='block my-2 text-cyan-500'>
                with Top Doctors
              </span>
            </h2>
            <p className='text-gray-200 text-base my-3'>
              Get instant access to the best doctors near you. Verified specialists, real patient <br /> reviews, and easy online booking.
              From general physicians <br /> to specialists — book in under 30 seconds. Safe, secure, and always available.
            </p>
            <div className='flex gap-4'>
              <Link href={'/all-appointment'}>
                <Button variant='outline' className={'bg-gradient-to-r from-sky-500 to-teal-400 text-black'}>
                  Browse Doctors
                </Button>
              </Link>
              <Button variant='outline' className={'text-white hover:bg-teal-900'}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;