import DestinationCard from '@/components/Destination/DestinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch('http://localhost:5000/destination')
    const destinations = await res.json()
    // console.log(data)
    return (
        <div className='max-w-11/12 mx-auto'>
            <h1>This is destination page</h1>

            <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-4 mt-10'>
                {

                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;