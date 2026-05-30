import { SearchItems } from '@/components/SearchItems';
import { SearchField } from '@heroui/react';
import React from 'react';

const AllAppointmentPage = () => {
  return (
    <div>
      <div className='space-y-3'>
        <h2 className='text-3xl font-bold text-center'>All Appointment</h2>
        <p className='text-sm text-muted text-center'>You Can Search and Find All Doctors Here.</p>
        <div className='flex justify-center'>
          <SearchItems></SearchItems>
        </div>
      </div>
    </div>
  );
};

export default AllAppointmentPage;