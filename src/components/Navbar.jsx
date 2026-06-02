'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const {
    data: session,
  } = authClient.useSession()
  // console.log(session, "Session");
  const user = session?.user
  // console.log(user, "User");
  const handleLogOut = async () => {
    await authClient.signOut();
  }


  return (
    <div className='shadow-md px-5 mb-8'>
      <nav className="flex justify-between items-center py-3 container mx-auto w-full">
        <Link href={'/'}>
          <div className='flex items-center gap-2'>
            <Image
              src={'/asset/logo.png'}
              alt='Logo Image'
              height={40}
              width={40}
              className='rounded-full'
            />
            <h3 className='font-bold text-xl bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent'>DocAppoint</h3>
          </div>
        </Link>

        <ul className="flex items-center gap-5 text-sm font-medium">
          <li>
            <Link href={"/"}>
              <Button variant='secondary'>Home</Button>
            </Link>
          </li>
          <li>
            <Link href={"/all-appointment"}>
              <Button variant='secondary'>All Appointment</Button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard"}>
              <Button variant='secondary'>Dashboard</Button>
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-5 text-sm">
          {user ? <>
            <li>
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button onClick={handleLogOut} variant="outline" className={'bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent'}>Log Out</Button>
            </li>
          </>
            : <>
              <li>
                <Link href={"/register"}>
                  <Button variant="outline" className={'bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent'}>Register</Button>
                </Link>
              </li>
              <li>
                <Link href={"/login"}>
                  <Button variant="outline" className={'bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent'}>Login</Button>
                </Link>
              </li>
            </>}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;