'use client'
import ProfileUpdate from '@/components/dashboard/ProfileUpdate';
import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';


const ProfilePage = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user
  // console.log(user, "User");

  return (
    <div>
      <h2 className='font-bold text-2xl my-4 text-center'>Profile</h2>
      <Card className='flex justify-center items-center'>
        <div className='flex justify-center mb-4'>
          {
            user?.image && (
              <Image
                src={user.image}
                alt='User Image'
                height={50}
                width={50}
                className='rounded-full border-4 border-cyan-300'
              />
            )
          }
        </div>
        <h2 className='font-bold text-2xl text-gray-800'>
          {user?.name}
        </h2>
        <p className='text-muted'>{user?.email}</p>
        <div>
          <ProfileUpdate user={user}></ProfileUpdate>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;