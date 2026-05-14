'use client';
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label, Description, FieldError, Link, } from '@heroui/react';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
const BookingCard = ({ data }) => {
    const { data: session } = authClient.useSession()

    const [date, setDate] = useState('')

    // console.log(date?.day, 'date mm')
    const onSubmit = async (e) => {
        const month = date.month;
        const day = date.day;
        const year = date.year;
        const bookingDate = { month, day, year }

        const userId = session?.user?.id
        const image = session?.user?.image
        const name = session?.user?.name
        console.log(userId, name, image)

        const res =await fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({bookingDate,userId,name,image,data})
        })
        const result = await res.json()
        console.log(result, 'this is submittion result')

    }
    return (
        <div>
            <Card className='max-w-150 min-w-100'>
                <p className=' text-[#6C696D] '>Starting from</p>
                <h3 className='text-[#15A1BF] font-bold text-2xl'>${data.price}</h3>
                <p className=' text-[#6C696D] '>Per Person</p>
                <DateField onChange={setDate}>
                    <Label />
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                    </DateField.Group>
                    <Description />
                    <FieldError />
                </DateField>

                <Link href={''} className=''><Button className={'w-full bg-[#15A1BF] rounded-md'} onClick={onSubmit}>Book Now</Button></Link>
                <div className="mt-3 space-y-4">
                    <p className='flex items-center gap-2'><FaCheck className='font-thin text-[#1E9E35]' />Luxury beachfront accommodation</p>
                    <p className='flex items-center gap-2'><FaCheck className='font-thin text-[#1E9E35]' />Luxury beachfront accommodation</p>
                    <p className='flex items-center gap-2'><FaCheck className='font-thin text-[#1E9E35]' />Luxury beachfront accommodation</p>
                </div>
            </Card>
        </div>
    );
};

export default BookingCard;