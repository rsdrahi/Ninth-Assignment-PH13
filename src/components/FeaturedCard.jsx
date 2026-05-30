import React from 'react';
import { Button } from '@heroui/react';
import AppointmentCard from './AppointmentCard';
import Link from 'next/link';

const FeaturedCard = async ({ }) => {

  const res = await fetch(`${process.env.NEXT_CLIENT_API_URL}/featured`)
  const featured = await res.json();
  console.log(featured, "Featured");

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>Feature </h2>
        <Link href={'/all-appointment'}>
          <Button>View All Doctors</Button>
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