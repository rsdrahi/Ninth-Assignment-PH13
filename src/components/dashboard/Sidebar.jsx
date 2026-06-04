'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {

  const pathName = usePathname();

  return (
    <div className='w-72 bg-white p-6 shadow-sm border-r'>
      <h2 className='text-3xl font-bold text-center mb-8'>Dashboard</h2>
      <div className='space-y-4'>
        <Link href={'/dashboard/bookings'}
          className={`flex items-center gap-3 p-4 rounded-2xl font-semibold 
          ${pathName === "/dashboard/bookings" ?
              'bg-cyan-400 text-white' :
              'bg-white '}`}>
          My Bookings
        </Link>
        <Link href={'/dashboard/profile'}
          className={`flex items-center gap-3 p-4 rounded-2xl font-semibold
          ${pathName === "/dashboard/profile" ?
              'bg-cyan-400 text-white' :
              'bg-white '}`}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;