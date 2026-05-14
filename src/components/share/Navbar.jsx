'use client'

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
// import { authClient } from "@/lib/auth-client"

const Navbar = () => {
    const path = usePathname();
    const [open, setOpen] = useState(false);


    const { data: session } = authClient.useSession()
    // console.log(session?.user, 'this is session')


    const haldleSignOut = async () => {
        await authClient.signOut();
    }
    return (
        <div className="shadow px-3 font-semibold">
            <div className="min-h-15 flex items-center justify-between">
                {/* logo */}
                <h1 className="font-bold text-2xl text-[#15A1BF]">Wanderlast</h1>

                {/* desktop left menu */}
                <div className="hidden md:block">
                    <ul className="flex gap-5">
                        <li>
                            <Link className={path === '/' ? 'text-[#15A1BF]' : ''} href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={path === '/add-des' ? 'text-[#15A1BF]' : ''} href="/add-des">
                                ADD Destinations
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={path === '/destinations' ? 'text-[#15A1BF]' : ''}
                                href="/destinations"
                            >
                                Destinations
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={path === '/bookings' ? 'text-[#15A1BF]' : ''}
                                href="/bookings"
                            >
                                My Bookings
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={path === '/admin' ? 'text-[#15A1BF]' : ''}
                                href="/admin"
                            >
                                Admin
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* desktop right menu */}

                {session ? <div className="hidden md:flex gap-5">
                    {/* <Image src={session?.user?.img}></Image> */}
                    <Button onClick={haldleSignOut}>Sign OUt</Button>
                </div> :
                    <ul className="hidden md:flex gap-5">
                        <li><Link href="/profile">Profile</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/signup">Sign Up</Link></li>
                    </ul>}


                {/* mobile button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {/* mobile menu */}
            {open && (
                <div className="md:hidden pb-4">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link
                                className={path === '/' ? 'text-[#15A1BF]' : ''}
                                href="/"
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={path === '/destinations' ? 'text-[#15A1BF]' : ''}
                                href="/destinations"
                                onClick={() => setOpen(false)}
                            >
                                Destinations
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={path === '/bookings' ? 'text-[#15A1BF]' : ''}
                                href="/bookings"
                                onClick={() => setOpen(false)}
                            >
                                My Bookings
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={path === '/admin' ? 'text-[#15A1BF]' : ''}
                                href="/admin"
                                onClick={() => setOpen(false)}
                            >
                                Admin
                            </Link>
                        </li>
                    </ul>

                    <div className="border-t my-3"></div>

                    <ul className="flex flex-col gap-3">
                        <li><Link href="/profile" onClick={() => setOpen(false)}>Profile</Link></li>
                        <li><Link href="/login" onClick={() => setOpen(false)}>Login</Link></li>
                        <li><Link href="/signup" onClick={() => setOpen(false)}>Sign Up</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
