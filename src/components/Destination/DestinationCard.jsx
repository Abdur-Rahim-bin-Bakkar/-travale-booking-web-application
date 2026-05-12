import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const DestinationCard = ({ destination }) => {
    // console.log(destination)
    return (
        <Card>{
            destination.imageUrl
            &&

            <Image src={destination.imageUrl.trim()} alt='destination image' width={400} height={300} className='w-full h-110 object-cover rounded-2xl'></Image>


        }
            <p className='flex items-center gap-4 text-[#6C696D] '><FaLocationDot />{destination.country} </p>


            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-xl'>{destination.destinationName}</h3>
                <h3><span className='font-bold text-xl'>${destination.price}</span>/Person</h3>
            </div>

            <p className='flex items-center gap-4 text-[#6C696D] text-lg'><CiCalendarDate />{destination.duration}</p>


            <Link href={`/destinations/${destination._id}`} className='text-[#15A1BF] flex gap-4 items-center font-bold '>BOOK NOW <FaExternalLinkAlt /></Link>
        </Card>
    );
};

export default DestinationCard;