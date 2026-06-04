import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar></Sidebar>
      <main className='flex-1'>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;