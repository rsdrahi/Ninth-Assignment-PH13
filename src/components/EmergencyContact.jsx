import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const EmergencyContact = () => {
  return (
    <div className=''>
      <h2 className='font-bold text-2xl text-center mb-8'>Emergency</h2>
      <div>
        <div className='grid md:grid-cols-2 gap-64 items-center'>
          <div className='left space-y-6'>
            <div className='flex gap-4'>
              <Image
                src={'/asset/ambulance.png'}
                alt='Ambulance Image'
                height={30}
                width={30}
              />
              <h3 className='text-2xl text-gray-800 font-semibold'>When To Contact Us</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Our emergency medical support team is available 24/7 for immediate assistance.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Emergency ambulance service</li>
                <li>Severe accidents or injuries</li>
                <li>Sudden chest pain or breathing difficulty</li>
                <li>Any life-threatening medical condition</li>
              </ul>
              <p className="font-medium text-red-600">
                Do not hesitate — every second matters in an emergency.
              </p>
            </div>
          </div>

          <div className='right bg-white border border-gray-200 p-8 shadow-lg rounded-xl'>
            <h3 className='text-xl font-semibold text-center mb-4'>
              For Help
            </h3>

            <div className='space-y-6 mb-4'>
              <div className='flex items-center justify-between bg-red-50 p-4 rounded-xl'>
                <div>
                  <p className="font-medium text-gray-800">Ambulance</p>
                  <p className="text-3xl font-bold text-red-600">999</p>
                </div>
                <a href="tel: +80" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition">Call Now</a>
              </div>
            </div>

            <div className="flex items-center justify-between bg-red-50 p-4 rounded-xl">
              <div>
                <p className="font-medium text-gray-800">Medical Help</p>
                <p className="text-3xl font-bold text-red-600">880 1711-XXXXXX</p>
              </div>
              <a href="tel: +80" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition">Call Now</a>
            </div>


            <Button className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 rounded-2xl text-lg transition shadow-md">Call For Emergency</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;