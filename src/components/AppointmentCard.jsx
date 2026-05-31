import { Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AppointmentCard = ({ appointment }) => {

  const { name, image, description, fee, specialty, hospital, _id } = appointment

  return (
    <Card>
      <div className='relative overflow-hidden aspect-square'>
        <Image
          src={image}
          alt='Doctor Image'
          // height={200}
          // width={200}
          fill
          className='object-cover rounded-lg'
        />
      </div>
      <div>
        <h3 className='font-bold text-2xl'>{name}</h3>
        <h2 className='font-medium'>{specialty}</h2>
      </div>
      <div>
        <p className='font-medium text-muted'>{description}</p>
      </div>
      <Separator></Separator>
      <div className='flex justify-between items-center'>
        <div>
          <p> <span className='font-bold'>Fee:</span> ৳{fee}</p>
          <p> <span className='font-bold'>Visit:</span> {hospital}</p>
        </div>
        <Link href={`/all-appointment/${_id}`}>
          <Button>
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AppointmentCard;