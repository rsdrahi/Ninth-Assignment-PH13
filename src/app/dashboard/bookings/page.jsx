import BookingCard from '@/components/dashboard/BookingCard';
import React from 'react';

const BookingsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-appointment`, {
    method: "GET",
    headers: {
      'content-type': 'application/json'
    }
  })
  const bookings = await res.json();
  console.log(bookings, "Data");

  return (
    <div>
      <h3 className='font-bold text-2xl text-center my-4'>Bookings</h3>
      <div>
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