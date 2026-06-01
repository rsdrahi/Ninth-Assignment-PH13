import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const StatsSection = () => {
  return (
    <div className='my-4'>
      {/* <h3 className='font-bold text-2xl text-center my-4'>Stats Section</h3> */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        <Card className='flex justify-center items-center p-6 border border-slate-200 hover:shadow-2xl hover:translate-y-2 transition-all duration-300'>
          <Image
            src={'/asset/doctors.png'}
            alt='Doctors Image'
            height={70}
            width={70}
          />
          <h3 className='font-bold text-xl'>500+ verified Doctors</h3>
        </Card>
        <Card className='flex justify-center items-center p-6 border border-slate-200 hover:shadow-2xl hover:translate-y-2 transition-all duration-300'>
          <Image
            src={'/asset/time.png'}
            alt='Doctors Image'
            height={70}
            width={70}
          />
          <h3 className='font-bold text-xl'>Average Waiting </h3>
        </Card>
        <Card className='flex justify-center items-center p-6 border border-slate-200 hover:shadow-2xl hover:translate-y-2 transition-all duration-300'>
          <Image
            src={'/asset/hospital.png'}
            alt='Doctors Image'
            height={70}
            width={70}
          />
          <h3 className='font-bold text-xl'>50+ Hospital</h3>
        </Card>
        <Card className='flex justify-center items-center p-6 border border-slate-200 hover:shadow-2xl hover:translate-y-2 transition-all duration-300'>
          <Image
            src={'/asset/support.png'}
            alt='Doctors Image'
            height={70}
            width={70}
          />
          <h3 className='font-bold text-xl'>24/7 Support</h3>
        </Card>
      </div>
    </div>
  );
};

export default StatsSection;