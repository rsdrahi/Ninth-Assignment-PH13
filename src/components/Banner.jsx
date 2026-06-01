import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div>
      Banner
      <section className='relative h-[95vh] overflow-hidden'>
        <Image
          src={'/asset/Baneer.jpg'}
          alt='Banner Image'
          height={800}
          width={880}
          className='w-full'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div>
      </section>
    </div>
  );
};

export default Banner;