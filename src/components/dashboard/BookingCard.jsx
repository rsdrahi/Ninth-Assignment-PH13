import { Button, Card } from '@heroui/react';
import React from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaRegCalendarAlt, FaRegTrashAlt } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { LuSquarePen } from 'react-icons/lu';

const BookingCard = ({ booking }) => {
  console.log(booking, "Booking");
  const { doctorName, patientName, date, time } = booking
  return (
    <div>
      <Card className=''>
        <h2 className='font-bold text-2xl'>{doctorName}</h2>
        <p
          className='font-semibold text-xl flex items-center gap-2'>
          <AiOutlineUsergroupAdd />
          {patientName}
        </p>
        <p className='flex items-center gap-2'> <FaRegCalendarAlt /> {date}</p>
        <p className='flex items-center gap-2'> <IoTime /> {time}</p>
        <div className='flex gap-4'>
          <Button variant='danger'> <FaRegTrashAlt />  Delete</Button>
          <Button variant='outline'> <LuSquarePen /> Update</Button>
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;