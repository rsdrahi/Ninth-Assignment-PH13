import AppointmentCard from '@/components/AppointmentCard';
import { SearchItems } from '@/components/SearchItems';
import { SearchField } from '@heroui/react';
import React from 'react';

const AllAppointmentPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-appointment`)
  const appointments = await res.json();
  console.log(appointments, "Data");


  return (
    <div>
      <div className='space-y-3'>
        <h2 className='text-3xl font-bold text-center'>All Appointment</h2>
        <p className='text-sm text-muted text-center'>You Can Search and Find All Doctors Here.</p>
        <div className='flex justify-center'>
          <SearchItems></SearchItems>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6'>
        {
          appointments.map(appointment => <AppointmentCard
            key={appointment._id}
            appointment={appointment}
          ></AppointmentCard>)
        }
      </div>
    </div>
  );
};

export default AllAppointmentPage;