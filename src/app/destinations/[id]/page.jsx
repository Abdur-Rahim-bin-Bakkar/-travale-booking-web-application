import BookingCard from '@/components/Destination/BookingCard';
import { DeleteModal } from '@/components/Destination/DeleteModal';
import { WithForm } from '@/components/Destination/EditDestinations';
import { Button, Card, DateField, Label, Description, FieldError } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const data = await res.json()
    console.log(data._id, 'id')
    return (
        <div className='max-w-11/12 mx-auto mt-10'>
            <div>
                <Link href={'/destinations'}>Back To Destinations</Link>
                <div className="">
                    <WithForm data={data} />
                    <DeleteModal id={data._id} />
                </div>
            </div>

            <div className="mt-10">

                <Image src={data?.imageUrl} alt='destination image' width={800} height={500} className='w-full h-100 object-cover'></Image>


                <div className="mt-6 md:flex gap-3 space-y-5">
                    <div >

                        <p className='flex items-center gap-4 text-[#6C696D] '><FaLocationDot />{data.country} </p>

                        <h3 className='font-medium text-3xl my-3'>{data.destinationName}</h3>

                        <p className='flex items-center gap-4 text-[#6C696D] text-lg'><span className='font-bold text-black'>4.8</span>(234 reviews)<CiCalendarDate />{data.duration}</p>

                        <h3 className='my-5 font-medium text-xl'>Overview</h3>
                        <p className=' text-[#6C696D] '>Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>
                        <h3 className='my-5 font-medium text-xl'>Highlights</h3>
                        <p className=' text-[#6C696D] '>Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                            <p className='flex items-center gap-2'><FaCheck className='font-thin text-[#1E9E35]' />Luxury beachfront accommodation</p>
                            <p className='flex items-center gap-2'><FaCheck className='font-thin text-[#1E9E35]' />Luxury beachfront accommodation</p>
                            <p className='flex items-center gap-2'><FaCheck className='font-thin text-[#1E9E35]' />Luxury beachfront accommodation</p>
                            <p className='flex items-center gap-2'><FaCheck className='font-thin text-[#1E9E35]' />Luxury beachfront accommodation</p>
                        </div>
                    </div>

                    <BookingCard data={data} />
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;