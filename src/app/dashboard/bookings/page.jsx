export const dynamic = "force-dynamic";
import BookingCard from '@/components/dashboard/BookingCard';
import React from 'react';

export const metadata = {
  title: "Doc Appoint- My Bookings",
  description: "Best Site to Appoint a Specialist",
};

const BookingsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-appointment`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      'content-type': 'application/json'
    }
  })
  const bookings = await res.json();
  console.log(bookings, "Data");

  return (
    <div>
      <h3 className='font-bold text-2xl text-center my-4'>Bookings</h3>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
        {
          bookings.map(booking => <BookingCard key={booking._id}
            booking={booking}
          ></BookingCard>)
        }
      </div>
    </div>
  );
};

export default BookingsPage;