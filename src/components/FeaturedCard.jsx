import React from 'react';
import { Button } from '@heroui/react';
import AppointmentCard from './AppointmentCard';
import Link from 'next/link';

const FeaturedCard = async ({ }) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
  const featured = await res.json();
  // console.log(featured, "Featured");

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>Feature </h2>
        <Link href={'/all-appointment'}>
          <Button variant='outline' className={'bg-gradient-to-r from-sky-500 to-teal-400 text-black rounded-full hover:bg-blue-700'}>View All Doctors</Button>
        </Link>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6'>
        {
          featured.map((appointment) => (<AppointmentCard key={appointment._id} appointment={appointment}></AppointmentCard>))
        }
      </div>

    </div>
  );
};

export default FeaturedCard;