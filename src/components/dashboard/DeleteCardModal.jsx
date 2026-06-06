'use client'
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteCardModal = ({ booking }) => {
  const router = useRouter();
  const { _id } = booking

  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-appointment/${booking._id}`, {
      method: "DELETE",
      headers: {
        'content-type': "application/json"
      }
    })
    const data = await res.json();
    // console.log(data, "Data Delete");
    if (data) {
      router.refresh();
      toast.error('Delete Appointment')
    }
  }

  return (
    <div>
      <AlertDialog>
        <Button variant='danger'> <FaRegTrashAlt />  Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete Booking Permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently <strong>Delete</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete Project
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteCardModal;