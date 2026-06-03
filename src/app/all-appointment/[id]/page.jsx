import { Button, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegHospital } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTime } from 'react-icons/io5';
import { TbCoinTaka } from 'react-icons/tb';

const DoctorsDetails = async ({ params }) => {

  const { id } = await params;
  console.log(id, "Id");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-appointment/${id}`);
  const doctorDetails = await res.json()
  // console.log(doctorDetails, "Details");
  const { name, image, description, fee, specialty, hospital, experience, location, availability } = doctorDetails

  return (
    <div className='grid grid-cols-12 gap-6 items-center'>
      <div className='left col-span-4'>
        <div className='relative aspect-square overflow-hidden rounded-xl'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover'
          />
        </div>
      </div>
      <div className='right col-span-8 space-y-4'>
        <h2 className='font-bold text-3xl'>{name}</h2>
        <p className='font-medium text-teal-700'>{specialty}</p>
        <p className='text-lg text-muted font-medium'>{description}</p>
        <div className='flex gap-48'>
          <div className='font-bold text-slate-800'>
            <h2 className='flex items-center gap-1'> <FaRegHospital /> Hospital :</h2>
            <h2 className='flex items-center gap-1'><IoTime /> Experience :</h2>
            <h2 className='flex items-center gap-1'><FaLocationDot /> Location :</h2>
            <h2 className='flex items-center gap-1'><TbCoinTaka /> Fee :</h2>
          </div>
          <Separator orientation="vertical"></Separator>
          <div className='font-bold text-slate-800'>
            <h2>{hospital}</h2>
            <h2>{experience}</h2>
            <h2>{location}</h2>
            <h2>{fee}</h2>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-xl my-2 text-teal-700'>Available</h2>
          <div>
            {
              availability?.map((available, index) => <span
                className="rounded-lg border border-primary px-3 py-1 text-sm mr-2 bg-teal-100"
                key={index}>
                {available}
              </span>)
            }
          </div>
        </div>
        <Link href={'/appointment-book'}>
          <Button variant='outline' className={'bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent'}>Book Appointment</Button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorsDetails;