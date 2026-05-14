import { DeleteModalBooking } from '@/components/Destination/DeleteModalBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const res = await fetch(`http://localhost:5000/booking/${session?.user?.id}`);
    const bookingData = await res.json()
    console.log(bookingData?._id)
    console.log(session?.user?.id)
    return (
        <div className='max-w-11/12 mx-auto'>
            <h1>this is booking page</h1>
            <div className='space-y-3'>

                {
                    bookingData.map((booking, index) => <div className='grid md:grid-cols-3 mt-15' key={index}>
                        <Image className='w-full h-80 object-cover' src={booking?.data?.imageUrl} alt='booking place image' width={500} height={300} />
                        <div className="p-4">
                            <h1>{booking?.data?.destinationName}</h1>
                        </div>
                        
                        <div className="p-4">
                            <DeleteModalBooking id={booking?._id} />
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default BookingPage;