import React from 'react';
import { object } from 'better-auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ProfileModal from './ProfileModal';

const ProfileUpdate = ({ user }) => {

  const router = useRouter();

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
    // console.log(data, "Data");
    if (res.ok) {
      toast.success("Profile updated");
      router.refresh();
    } else {
      toast.error("Update failed");
    }

  }

  return (
    <div>
      <ProfileModal user={user} onSubmit={onSubmit} ></ProfileModal>
    </div>
  );
};

export default ProfileUpdate;