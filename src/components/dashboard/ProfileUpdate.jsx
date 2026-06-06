import React from 'react';
import toast from 'react-hot-toast';
import ProfileModal from './ProfileModal';
import { authClient } from '@/lib/auth-client';

const ProfileUpdate = ({ user }) => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const update = Object.fromEntries(formData.entries());
    console.log(update, "Update");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${user.email}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(update)
    })
    const data = await res.json();
    console.log(data, "Data");
    if (data) {
      await authClient.updateUser({
        image: update?.image,
        name: update?.name,
      })
    }
  }

  return (
    <div>
      <ProfileModal user={user} onSubmit={onSubmit} ></ProfileModal>
    </div>
  );
};

export default ProfileUpdate;